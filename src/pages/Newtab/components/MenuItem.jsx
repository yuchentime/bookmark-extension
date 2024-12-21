import React from 'react';

const MenuItem = ({
  children,
  onMouseEnter = (e) => (e.currentTarget.style.backgroundColor = '#f0f0f0'),
  onMouseLeave = (e) => (e.currentTarget.style.backgroundColor = 'transparent'),
  onClick = () => {},
  minWidth = '60px',
}) => {
  return (
    <li
      style={{
        minWidth,
        textAlign: 'center',
        padding: '8px 10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default MenuItem;
