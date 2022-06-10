import React from 'react';

function Sidebar({ show, taskGroups }) {
  const taskGroupElements = taskGroups.map((taskGroup) => {
    return (
      <div className="sidebar-item">{taskGroup}</div>
    );
  });
  return (
    <div className={show ? 'sidebar show' : 'sidebar hide'}>
      {taskGroupElements}
    </div>
  );
}

export default Sidebar;
