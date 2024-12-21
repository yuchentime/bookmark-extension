import React from 'react';

const PartitionSubMenu = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: "300px",
        top: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: '10px 15px',
          cursor: 'pointer',
          borderBottom: '1px solid #e0e0e0',
          color: '#333',
        }}
      >
        编辑
      </div>
      <div
        style={{
          padding: '10px 15px',
          cursor: 'pointer',
          color: '#d9534f',
        }}
      >
        删除
      </div>
    </div>
  );
};

export default PartitionSubMenu;
