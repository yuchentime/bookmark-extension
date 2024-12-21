import React, { useEffect } from 'react';
import Bookmark from './components/Bookmark';
import Partition from './components/Partition';
import Navbar from './components/Navbar';

const Newtab = () => {
  const [partitions, setPartitions] = React.useState([]);
  const [bookmarks, setBookmarks] = React.useState([]);

  useEffect(() => {
    chrome.storage.local.get(['bookmarks', 'partitions'], (result) => {
      console.log('bookmarks: ', result.bookmarks);
      console.log('partitions: ', result.partitions);
      setBookmarks(JSON.parse(result.bookmarks));
      setPartitions(JSON.parse(result.partitions))
    });
  }, []);

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
        {partitions.map((partition) => (
          <Partition title={partition.name}>
            {bookmarks
              .filter((bookmark) => bookmark.type === partition.name)
              .map((bookmark) => (
                <Bookmark bookmark={bookmark} key={bookmark.path} />
              ))}
          </Partition>
        ))}
      </div>
    </div>
  );
};

export default Newtab;
