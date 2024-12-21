import React from 'react';

const PartitionMenu = ({ partitions, onMenuClick }) => {
  return (
    <div
      className="partition_menu"
      style={{
        width: '300px',
        backgroundColor: '#fafafa',
        overflowY: 'auto',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s ease',
      }}
    >
      {partitions.map((partition, index) => (
        <div key={partition.name}>
          <div
            onClick={() => onMenuClick(index)}
            style={{
              padding: '15px 20px',
              cursor: 'pointer',
              borderBottom: '1px solid #e0e0e0',
              fontSize: '16px',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              borderRadius: '4px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.color = '#007bff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {partition.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartitionMenu;
