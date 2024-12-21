// background.js
let cachedBookmarks = [];
let cachedPartitions = [];

// 获取所有书签并缓存
function fetchBookmarks() {
  chrome.bookmarks.getTree((bookmarkTreeNodes) => {
    cachedBookmarks = getAllBookmarksWithHierarchy(bookmarkTreeNodes);
    // console.log('Bookmarks fetched and cached:', cachedBookmarks);
    // 需要特别注意：用户可能修改了分区的顺序、书签的描述信息等等，因此不能覆盖已有的数据
    const allPartitions = cachedBookmarks.map((bookmark) => bookmark.type);
    cachedPartitions = allPartitions
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((type, index) => ({ order: index + 1, name: type }));
    const newPartitions = [{ order: 0, name: '最近使用' }, ...cachedPartitions];

    chrome.storage.local.set(
      { partitions: JSON.stringify(newPartitions) },
      () => {
        console.log('partitions saved to local storage.');
      }
    );
    chrome.storage.local.set(
      { bookmarks: JSON.stringify(cachedBookmarks) },
      () => {
        console.log('cachedBookmarks saved to local storage.');
      }
    );
  });
}

// 递归获取书签及其层级
function getAllBookmarksWithHierarchy(bookmarkNodes) {
  let bookmarks = [];

  function traverse(node, path) {
    if (node.url && node.url.startsWith('http')) {
      const nodeUrl = new URL(node.url);
      bookmarks.push({
        id: node.id,
        parentId: node.parentId,
        title: node.title,
        url: node.url,
        type: path[path.length - 1],
        icon: nodeUrl.protocol + '//' + nodeUrl.hostname + '/favicon.ico',
      });
    }
    if (node.children) {
      const newPath = [...path, node.title];
      node.children.forEach((child) => traverse(child, newPath));
    }
  }

  bookmarkNodes.forEach((node) => traverse(node, []));
  return bookmarks;
}

// 监听书签变化事件
chrome.bookmarks.onChanged.addListener(fetchBookmarks);
chrome.bookmarks.onCreated.addListener(fetchBookmarks);
chrome.bookmarks.onRemoved.addListener(fetchBookmarks);

// 扩展启动时获取书签
fetchBookmarks();

// 提供一个接口供其他页面获取缓存的书签
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getBookmarks') {
    sendResponse(cachedBookmarks);
  } else if (request.action === 'moveBookmark') {
    const destination = {
      parentId: request.parentId,
    };
    chrome.bookmarks.move(request.id, destination, () => {
      fetchBookmarks();
    });
    return true;
  } else if (request.action === 'renameBookmark') {
    const changes = {
      title: request.title,
    };
    chrome.bookmarks.update(request.id, changes, () => {});
    return true;
  } else if (request.action === 'deleteBookmark') {
    chrome.bookmarks.remove(request.id, () => {
      fetchBookmarks();
    });
  } else if (request.action === 'getPartitions') {
    sendResponse(cachedPartitions);
  }
});
