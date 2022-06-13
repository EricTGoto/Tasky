import React from 'react';

function Sidebar({ show, taskGroups, setSelectedGroup }) {
  function filterTasks(selectedGroup) {
    setSelectedGroup(selectedGroup);
  }

  const taskGroupElements = taskGroups.map((taskGroup) => {
    return (
      <button type="button" className="sidebar-item" onClick={() => filterTasks(taskGroup)}>{taskGroup}</button>
    );
  });
  return (
    <nav className={show ? 'sidebar show' : 'sidebar hide'}>
      {taskGroupElements}
    </nav>
  );
}

export default Sidebar;
