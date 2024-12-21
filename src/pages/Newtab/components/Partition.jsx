import React from 'react';

const Partition = ({ title, children }) => {
  return (
    <div
      className="bookmark-section"
      key={title}
      style={{ borderRadius: '8px' }}
    >
      <div
        className="section-title"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.8em',
          padding: '5px',
          backgroundColor: '#61dafb',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      >
        {title}
      </div>
      <div
        className="grid-container"
        style={{
          padding: '20px',
          border: '4px solid #61dafb',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 300px)',
          gridTemplateRows: 'auto',
          gap: '20px',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Partition