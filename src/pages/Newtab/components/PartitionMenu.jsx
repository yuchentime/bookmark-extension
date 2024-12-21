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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flex: 1 }}>
        {partitions.map((partition, index) => (
          <div
            key={index}
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
            {partition.name}
          </div>
        ))}
      </div>

      <div
        style={{
          height: '40px',
          padding: '5px',
          backgroundColor: '#fafafa',
        }}
      >
        <button
          style={{
            borderRadius: '4px',
            width: '80px',
            height: '30px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: '#E0E0E0',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#C0C0C0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E0E0E0';
          }}
        >
          同步书签
        </button>
      </div>
    </div>
  );
};

export default PartitionMenu;
