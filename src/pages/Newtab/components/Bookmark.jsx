import React from 'react';

const Bookmark = ({ bookmark }) => {
  return (
    <div
      className="grid-item"
      key={bookmark.id}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        className="bookmark-card"
        style={{
          display: 'flex',
          height: '48px',
          flexDirection: 'row',
          justifyContent: 'start',
          gap: '5px',
          alignItems: 'start',
          backgroundColor: 'white',
          padding: '15px',
          // borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          textAlign: 'center',
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
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
          }}
        >
          <span
            className="bookmark-title"
            style={{
              fontSize: '1.3em',
              fontWeight: 'bold',
            }}
          >
            {bookmark.title}
          </span>
          <span className="bookmark-desc">卡是个为肯定高大师的</span>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
