const BookmarkMenu = ({ bookmark, offsetX, offsetY, visible }) => {
  if (!visible || !offsetX || !offsetY) {
    console.log('visible: ', visible);
    console.log('offsetX: ', offsetX);
    console.log('offsetY: ', offsetY);
    console.error("Cannot open menu.")
    return null;
  }
  return (
    <div
      style={{
        position: 'absolute',
        left: offsetX,
        top: offsetY,
        zIndex: 999,
        backgroundColor: 'white',
        padding: '10px',
      }}
    >
      <ul>
        <li>编辑</li>
        <li>删除</li>
      </ul>
    </div>
  );
};

export default BookmarkMenu;
