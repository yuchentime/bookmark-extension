import React, { useEffect, useRef, useState } from 'react';
import PartitionMenu from './components/PartitionMenu';
import BookmarkPanel from './components/BookmarkPanel';
import Navbar from './components/Navbar';

const Newtab = () => {
  const [partitions, setPartitions] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const partitionRefs = useRef([]); // 用于存储每个 Partition 的 ref
  const handleMenuClick = (index) => {
    partitionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    chrome.storage.local.get(['bookmarks', 'partitions'], (result) => {
      console.log('bookmarks: ', result.bookmarks);
      console.log('partitions: ', result.partitions);
      setBookmarks(JSON.parse(result.bookmarks));
      setPartitions(JSON.parse(result.partitions));
    });
  }, []);

  return (
    <div style={{ display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      {/*<Navbar />*/}
      {/* 左侧菜单 */}
      <PartitionMenu partitions={partitions} onMenuClick={(index) => handleMenuClick(index)} />

      {/* 右侧书签面板 */}
      <BookmarkPanel partitions={partitions} bookmarks={bookmarks} ref={partitionRefs} />
    </div>
  );
};

export default Newtab;
