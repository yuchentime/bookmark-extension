import React, { useState, useRef, useEffect } from 'react';

const PopupMenu = ({ children, menuItems, onClose }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div onClick={handleClick}>{children}</div>
      {menuItems && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                borderBottom: index < menuItems.length - 1 ? '1px solid #ccc' : 'none',
              }}
              onClick={item.onClick}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopupMenu;