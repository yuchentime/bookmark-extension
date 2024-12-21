// background.js
let cachedBookmarks = [];

// 获取所有书签并缓存
function fetchBookmarks() {
  chrome.bookmarks.getTree((bookmarkTreeNodes) => {
    cachedBookmarks = getAllBookmarksWithHierarchy(bookmarkTreeNodes);
    // console.log('Bookmarks fetched and cached:', cachedBookmarks);
    // 需要特别注意：用户可能修改了分区的顺序、书签的描述信息等等，因此不能覆盖已有的数据
    const allPartitions = cachedBookmarks.map(
      (bookmark) => bookmark.type
    );
    const partitions = allPartitions
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((type, index) => ({ order: index, name: type }));
    console.log('partitions fetched and cached:', partitions);
    chrome.storage.local.set({ partitions: JSON.stringify(partitions) }, () => {
      console.log('partitions saved to local storage.');
    });
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
    if (node.url && (node.url.startsWith("http"))) {
      const nodeUrl = new URL(node.url);
      bookmarks.push({
        title: node.title,
        url: node.url,
        type: path[path.length - 1],
        icon: nodeUrl.protocol + "//" + nodeUrl.hostname + '/favicon.ico',
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
  }
});
