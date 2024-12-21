import React, { forwardRef, useState } from 'react';
import Partition from './Partition'; // 假设 Partition 组件已存在
import Bookmark from './Bookmark';
import BookmarkMenu from './BookmarkMenu';

const BookmarkPanel = forwardRef(({ partitions, bookmarks }, ref) => {
  const [showMenu, setShowMenu] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [bookmark, setBookmark] = useState([]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        overflowY: 'auto',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1330px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        {/*<h1*/}
        {/*  style={{*/}
        {/*    fontSize: '24px',*/}
        {/*    fontWeight: 'bold',*/}
        {/*    marginBottom: '20px',*/}
        {/*    textAlign: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  搜索框*/}
        {/*</h1>*/}

        <div
          className="bookmark-panel"
          style={{
            marginTop: '30px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            backgroundColor: 'transparent',
            gridGap: '20px',
          }}
        >
          {partitions.map((partition, index) => (
            <div ref={(el) => (ref.current[index] = el)} key={partition.name}>
              <Partition title={partition.name}>
                {bookmarks
                  .filter((bookmark) => bookmark.type === partition.name)
                  .map((bookmark) => (
                    <Bookmark
                      key={bookmark.path}
                      bookmark={bookmark}
                      openPopupMenu={(visible, x, y) => {
                        setOffsetX(x);
                        setOffsetY(y);
                        setShowMenu(visible);
                        setBookmark(bookmark);
                      }}
                    />
                  ))}
              </Partition>
            </div>
          ))}
        </div>

        <BookmarkMenu
          bookmark={bookmark}
          offsetX={offsetX}
          offsetY={offsetY}
          visible={showMenu}
          close={() => setShowMenu(false)}
        />
      </div>
    </div>
  );
});

export default BookmarkPanel;
