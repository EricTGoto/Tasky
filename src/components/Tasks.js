import React from 'react';

function Tasks({ tasks, deleteFunction }) {
  function handleEdit(e) {
    // if contenteditable is true then turn it off and vice versa
    const { target } = e;
    const titleElement = target.parentElement.firstChild;
    const descriptionElement = titleElement.nextSibling;

    const isEditable = titleElement.getAttribute('contenteditable'); // string

    if (isEditable === 'true') {
      titleElement.setAttribute('contenteditable', 'false');
      descriptionElement.setAttribute('contenteditable', 'false');
    } else {
      titleElement.setAttribute('contenteditable', 'true');
      descriptionElement.setAttribute('contenteditable', 'true');
    }
  }

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
        <p contentEditable="false" role="presentation" className="task-description">{task.taskText}</p>
        <p>Date</p>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="button" id={task.taskID} onClick={deleteFunction}>Delete</button>
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
