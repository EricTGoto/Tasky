import React from 'react';

function Sidebar({ show }) {
  return (
    <div className={show ? 'sidebar show' : 'sidebar hide'}>
      <div className="sidebar-item">First Item</div>
      <div className="sidebar-item">Second Item</div>
      <div className="sidebar-item">Third Item</div>
    </div>
  );
}

export default Sidebar;
