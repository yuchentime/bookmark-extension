import React, { forwardRef, useRef } from 'react';
import Partition from './Partition'; // 假设 Partition 组件已存在
import Bookmark from './Bookmark'; // 假设 Bookmark 组件已存在

const BookmarkPanel = forwardRef(({ partitions, bookmarks }, ref) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        overflowY: 'auto', // 防止右侧内容溢出
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
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
                    <Bookmark bookmark={bookmark} key={bookmark.path} />
                  ))}
              </Partition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default BookmarkPanel;
