import React from 'react';
import './Newtab.css';
import './Newtab.scss';

const bookmarks = [
  { id: 1, title: 'React Documentation', type: 'Development', url: 'https://reactjs.org' },
  { id: 2, title: 'MDN Web Docs', type: 'Development', url: 'https://developer.mozilla.org' },
  { id: 3, title: 'YouTube', type: 'Entertainment', url: 'https://youtube.com' },
  { id: 4, title: 'Medium', type: 'Reading', url: 'https://medium.com' },
  { id: 5, title: 'Stack Overflow', type: 'Development', url: 'https://stackoverflow.com' },
  { id: 6, title: 'Netflix', type: 'Entertainment', url: 'https://netflix.com' },
  { id: 7, title: 'GitHub', type: 'Development', url: 'https://github.com' },
  { id: 8, title: 'Twitter', type: 'Entertainment', url: 'https://twitter.com' },
  { id: 6, title: 'Netflix', type: 'Research', url: 'https://netflix.com' },
  { id: 7, title: 'GitHub', type: 'Research', url: 'https://github.com' },
  { id: 8, title: 'Twitter', type: 'Happy', url: 'https://twitter.com' },
];

const Newtab = () => {
  const types = ['Development', 'Entertainment', 'Reading', 'Research', 'Happy'];

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Bookmark Manager</h1>
      </nav>

      <div className="bookmark-panel">
        {types.map((type) => (
          <div className="bookmark-section" key={type}>
            <h2 className="section-title">{type}</h2>
            <div className="panel">
              <div className="grid-container">
                {bookmarks.filter(bookmark => bookmark.type === type).map((bookmark) => (
                  <div className="grid-item" key={bookmark.id}>
                    <div className="bookmark-card">
                      <h3 className="bookmark-title">{bookmark.title}</h3>
                      <p className="bookmark-url">
                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.url}</a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newtab;