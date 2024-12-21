import React from 'react';

const Bookmark = ({ bookmark }) => {
  return (
    <div
      className="grid-item"
      key={bookmark.title}
      onClick={() => window.open(bookmark.url)}
      style={{ display: 'flex', justifyContent: 'center', cursor: 'default' }}
    >
      <div
        className="bookmark-card"
        style={{
          display: 'flex',
          height: '48px',
          flexDirection: 'row',
          justifyContent: 'start',
          gap: '5px',
          alignItems: 'center', // 修改为居中对齐
          backgroundColor: 'white',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          textAlign: 'center',
          borderRadius: '8px', // 添加圆角效果
          transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', // 添加平滑过渡效果
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)'; // 鼠标进入时放大
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // 增加阴影
          e.currentTarget.style.backgroundColor = '#f0f0f0'; // 改变背景色
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // 鼠标离开时恢复原状
          e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // 恢复阴影
          e.currentTarget.style.backgroundColor = 'white'; // 恢复背景色
        }}
      >
        <img
          src={bookmark.icon}
          alt={bookmark.title}
          className="bookmark-icon"
          style={{ width: '48px', height: '48px' }}
        />

        <div
          className=""
          style={{
            display: 'flex',
            width: "220px",
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
          }}
        >
          <span
            className="bookmark-title"
            style={{
              fontSize: bookmark.title.split('\n').length > 1 ? '1em' : '1.3em',
              fontWeight: 'bold',
              textAlign: 'left',
              overflow: 'hidden', // 超出部分隐藏
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1, // 限制为两行
            }}
          >
            {bookmark.title}
          </span>
          <span
            className="bookmark-desc"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // 限制为两行
              overflow: 'hidden', // 超出部分隐藏
            }}
          >
            卡是个为肯定高大师的
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
