import React from 'react';
import Bookmark from './components/Bookmark';
import Partition from './components/Partition';
import Navbar from './components/Navbar';
// import './Newtab.css';
// import './Newtab.scss';

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
  {
    id: 9,
    title: 'Nier',
    type: 'Development',
    url: 'https://twitter.com',
    icon: 'https://twitter.com/favicon.ico',
  },
];

const Newtab = () => {
  const types = ['Development', 'Entertainment', 'Reading'];

  return (
    <div
      className="container"
      style={{ maxWidth: '1300px', margin: '0 auto', padding: '20px' }}
    >
      <Navbar />

      <div
        className="bookmark-panel"
        style={{
          marginTop: '30px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto',
          backgroundColor: 'transparent',
          gridGap: '20px',
        }}
      >
        {types.map((type) => (
          <Partition title={type}>
            {bookmarks
              .filter((bookmark) => bookmark.type === type)
              .map((bookmark) => (
                <Bookmark bookmark={bookmark} />
              ))}
          </Partition>
        ))}
      </div>
    </div>
  );
};

export default Newtab;
