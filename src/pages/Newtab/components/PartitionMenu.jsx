import React from 'react';

const PartitionMenu = ({ partitions, onMenuClick }) => {
  return (
    <div
      className="partition_menu"
      style={{
        width: '300px',
        backgroundColor: '#fafafa',
        overflowY: 'auto', // 防止菜单区域过长
      }}
    >
      {partitions.map((partition, index) => (
        <div
          key={partition.name}
          onClick={() => onMenuClick(index)}
          style={{
            padding: '10px',
            cursor: 'pointer',
            borderBottom: '1px solid #ddd',
          }}
        >
          {partition.name}
        </div>
      ))}
    </div>
  );
};

export default PartitionMenu;
