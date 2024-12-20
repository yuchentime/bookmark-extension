import React from 'react';
import './Newtab.css';
import './Newtab.scss';

const bookmarks = [
  {
    id: 1,
    title: 'React Documentation',
    type: 'Development',
    url: 'https://reactjs.org',
    icon: 'https://reactjs.org/favicon.ico',
  },
  {
    id: 2,
    title: 'MDN Web Docs',
    type: 'Development',
    url: 'https://developer.mozilla.org',
    icon: 'https://developer.mozilla.org/favicon.ico',
  },
  {
    id: 3,
    title: 'YouTube',
    type: 'Entertainment',
    url: 'https://youtube.com',
    icon: 'https://youtube.com/favicon.ico',
  },
  {
    id: 4,
    title: 'Medium',
    type: 'Reading',
    url: 'https://medium.com',
    icon: 'https://medium.com/favicon.ico',
  },
  {
    id: 5,
    title: 'Stack Overflow',
    type: 'Development',
    url: 'https://stackoverflow.com',
    icon: 'https://stackoverflow.com/favicon.ico',
  },
  {
    id: 6,
    title: 'Netflix',
    type: 'Entertainment',
    url: 'https://netflix.com',
    icon: 'https://netflix.com/favicon.ico',
  },
  {
    id: 7,
    title: 'GitHub',
    type: 'Development',
    url: 'https://github.com',
    icon: 'https://github.com/favicon.ico',
  },
  {
    id: 8,
    title: 'Twitter',
    type: 'Entertainment',
    url: 'https://twitter.com',
    icon: 'https://twitter.com/favicon.ico',
  },
];

const Newtab = () => {
  const types = ['Development', 'Entertainment', 'Reading'];

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Bookmark Manager</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search bookmarks..."
        />
      </nav>

      <div className="bookmark-panel">
        {types.map((type) => (
          <div className="bookmark-section" key={type}>
            <div
              className='section-title'
            >
              {type}
            </div>
            <div className="panel">
              <div className="grid-container">
                {bookmarks
                  .filter((bookmark) => bookmark.type === type)
                  .map((bookmark) => (
                    <div className="grid-item" key={bookmark.id}>
                      <div className="bookmark-card">
                        <img
                          src={bookmark.icon}
                          alt={bookmark.title}
                          className="bookmark-icon"
                        />
                        <div
                          className=""
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            alignItems: 'start',
                          }}
                        >
                          <span className="bookmark-title">
                            {bookmark.title}
                          </span>
                          <span className="bookmark-desc">
                            卡是个为肯定高大师的
                          </span>
                        </div>
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
