import React from 'react';
import trash from '../images/trash.svg';
import edit from '../images/edit.svg';

function Tasks({ tasks, deleteFunction, sidebarShowing }) {
  function handleEdit(e) {
    // if contenteditable is true then turn it off and vice versa
    const { target } = e;
    const titleElement = target.parentElement.firstChild;

    const isEditable = titleElement.getAttribute('contenteditable'); // string

    if (isEditable === 'true') {
      titleElement.setAttribute('contenteditable', 'false');
    } else {
      titleElement.setAttribute('contenteditable', 'true');
    }
  }

  const taskContainerSize = sidebarShowing ? '2' : '1 / 3';

  React.useEffect(() => {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.style.gridColumn = taskContainerSize;
  }, [sidebarShowing]);

  function handleClick(e) {
    console.log(e);
  }

  function handleKeyPress(e) {
    console.log(e);
  }

  const taskList = tasks.map((task) => {
    return (
      <div key={task.taskID} className="task">
        <p contentEditable="false" role="presentation" className="task-title" onClick={handleClick} onKeyDown={handleKeyPress}>{task.taskText}</p>
        <div className="task-right">
          <p>Date</p>
          <input type="image" src={edit} onClick={handleEdit} alt="edit" />
          <input type="image" src={trash} id={task.taskID} alt="delete" onClick={deleteFunction} />
        </div>
      </div>
    );
  });
  return (
    <div className="task-container">
      <div className="tasks">
        {taskList}
      </div>
    </div>
  );
}

export default Tasks;
