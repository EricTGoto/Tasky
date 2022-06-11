import React from 'react';

function Sidebar({ show, taskGroups, setSelectedGroup }) {
  function filterTasks(selectedGroup) {
    setSelectedGroup(selectedGroup);
  }

  const taskGroupElements = taskGroups.map((taskGroup) => {
    return (
      <div className="sidebar-item" onClick={() => filterTasks(taskGroup)} role="presentation">{taskGroup}</div>
    );
  });
  return (
    <div className={show ? 'sidebar show' : 'sidebar hide'}>
      {taskGroupElements}
    </div>
  );
}

export default Sidebar;
