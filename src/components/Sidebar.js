import React from 'react';

function Sidebar({ show }) {
  return (
    <div className={show ? 'sidebar show' : 'sidebar hide'}>
      Sidebar
    </div>
  );
}

export default Sidebar;
