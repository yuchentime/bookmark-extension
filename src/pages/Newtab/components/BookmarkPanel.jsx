import React, { forwardRef } from 'react';
import Partition from './Partition'; // 假设 Partition 组件已存在
import Bookmark from './Bookmark';

const BookmarkPanel = forwardRef(({ partitions, bookmarks }, ref) => {
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
          maxWidth: '1300px',
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
