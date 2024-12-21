import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '15px',
        color: 'white',
      }}
    >
      <h1 style={{ margin: '0', fontSize: '2em' }}>Bookmark Manager</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search bookmarks..."
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: 'none',
          width: '300px',
          fontSize: '1em',
        }}
      />
    </nav>
  );
};

export default Navbar;
