import React from 'react';

function Overview({ tasks, deleteFunction }) {
  function handleEdit(e) {
    // if contenteditable is true then turn it off and vice versa
    const { target } = e;
    const pElement = target.previousSibling;
    const isEditable = pElement.getAttribute('contenteditable'); // string
    console.log(typeof isEditable);

    if (isEditable === 'true') {
      pElement.setAttribute('contenteditable', 'false');
    } else {
      pElement.setAttribute('contenteditable', 'true');
    }
  }

  const taskList = tasks.map((task) => {
    return (
      <div key={task.taskID} className="task">
        <p contentEditable="true">{task.taskText}</p>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="button" id={task.taskID} onClick={deleteFunction}>Delete</button>
      </div>
    );
  });
  return (
    <div>
      {taskList}
    </div>
  );
}

export default Overview;
