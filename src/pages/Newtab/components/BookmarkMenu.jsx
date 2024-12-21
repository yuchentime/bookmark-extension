import React, { useEffect } from 'react';

const BookmarkMenu = ({ bookmark, offsetX, offsetY, visible, close }) => {
  const menuRef = React.useRef(null);

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
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '10px 0px',
        width: '60px',
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
        <li
          style={{
            width: '36px',
            textAlign: 'center',
            padding: '8px 12px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#f0f0f0')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          编辑
        </li>
        <li
          style={{
            width: '36px',
            textAlign: 'center',
            padding: '8px 12px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#f0f0f0')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          删除
        </li>
      </ul>
    </div>
  );
};

export default BookmarkMenu;
