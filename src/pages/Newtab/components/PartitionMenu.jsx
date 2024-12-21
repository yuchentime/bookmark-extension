import React, { useState } from 'react';

const PartitionMenu = ({ partitions, onMenuClick }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showMenu, setShowMenu] = useState({ index: null, visible: false });

  const handleExpandToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleMenuToggle = (index) => {
    setShowMenu({
      index: index,
      visible: !showMenu.visible,
    });
  };

  const handleEdit = (index) => {
    console.log(`Edit ${partitions[index].name}`);
    setShowMenu({ index: null, visible: false });
  };

  const handleDelete = (index) => {
    console.log(`Delete ${partitions[index].name}`);
    setShowMenu({ index: null, visible: false });
  };

  return (
    <div
      className="partition_menu"
      style={{
        width: '300px',
        backgroundColor: '#fafafa',
        overflowY: 'auto',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        borderRadius: '8px',
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
              <span
                onClick={(e) => {
                  e.stopPropagation(); // 防止事件冒泡
                  handleExpandToggle(index);
                }}
                style={{
                  marginRight: '10px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  color: '#007bff',
                }}
              >
                {expandedIndex === index ? '▼' : '►'}
              </span>
              {partition.name}
            </div>

            <div
              className="partition_sub_menu"
              onClick={(e) => {
                e.stopPropagation(); // 防止事件冒泡
                handleMenuToggle(index);
              }}
              style={{
                padding: '5px',
                display: 'flex',
                width: '24px',
                height: '24px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ccc'; // 改变背景色
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'; // 恢复背景色
              }}
            >
              <span
                style={{
                  cursor: 'pointer',
                  fontSize: '20px',
                  color: '#007bff',
                }}
              >
                ⋮
              </span>
            </div>

            {showMenu.visible && showMenu.index === index && (
              <div
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  borderRadius: '4px',
                  zIndex: 1000,
                }}
              >
                <div
                  onClick={() => handleEdit(index)}
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
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: '10px 15px',
                    cursor: 'pointer',
                    color: '#d9534f',
                  }}
                >
                  删除
                </div>
              </div>
            )}
          </div>

          {expandedIndex === index && (
            <div style={{ paddingLeft: '20px', backgroundColor: '#f9f9f9' }}>
              {/* 这里可以放置二级子菜单 */}
              <div
                style={{ padding: '10px', borderBottom: '1px solid #e0e0e0' }}
              >
                子菜单1
              </div>
              <div
                style={{ padding: '10px', borderBottom: '1px solid #e0e0e0' }}
              >
                子菜单2
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PartitionMenu;
