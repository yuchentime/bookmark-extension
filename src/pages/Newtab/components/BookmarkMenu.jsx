import React, { useEffect } from 'react';
import MenuItem from './MenuItem';

const BookmarkMenu = ({ bookmark, offsetX, offsetY, visible, close }) => {
  const menuRef = React.useRef(null);
  const [partitions, setPartitions] = React.useState([]);
  const [showPartitionMenu, setShowPartitionMenu] = React.useState(false);
  useEffect(() => {
    chrome.storage.local.get(['partitions'], (result) => {
      const originalPartitions = JSON.parse(result.partitions);
      // 去除第一个“最近使用”
      setPartitions(originalPartitions.slice(1));
    });
  }, []);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      style={{
        position: 'absolute',
        left: offsetX,
        top: offsetY + 20,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '10px 0px',
        minWidth: '80px',
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          padding: '0',
          margin: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MenuItem>
          <span>编辑</span>
        </MenuItem>
        <MenuItem
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
            setShowPartitionMenu(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            setShowPartitionMenu(false);
          }}
        >
          <span>移动至</span>
          {showPartitionMenu && (
            <ul
              style={{
                position: 'absolute',
                top: '42px',
                left: '100%',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '10px 0px',
                minWidth: '80px',
                listStyleType: 'none',
              }}
            >
              {partitions.map((partition, index) => (
                <MenuItem minWidth="80px">
                  <span>{partition.name}</span>
                </MenuItem>
              ))}
            </ul>
          )}
        </MenuItem>
        <MenuItem>
          <span>删除</span>
        </MenuItem>
      </ul>
    </div>
  );
};

export default BookmarkMenu;
