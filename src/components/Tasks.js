import React from 'react';
import trash from '../images/trash.svg';
import edit from '../images/edit.svg';

function Tasks({ tasks, deleteFunction, sidebarShowing }) {
  const [editable, setEditable] = React.useState('false');

  function handleEdit() {
    // if contenteditable is true then turn it off and vice versa
    setEditable((prevEditable) => {
      if (prevEditable === 'false') {
        return 'true';
      // eslint-disable-next-line no-else-return
      } else {
        return 'false';
      }
    });
  }

  const taskContainerSize = sidebarShowing ? '2' : '1 / 3';

  React.useEffect(() => {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.style.gridColumn = taskContainerSize;
  }, [sidebarShowing]);

  const taskList = tasks.map((task) => {
    return (
      <div key={task.taskID} className="task">
        <p contentEditable={editable} role="presentation" className="task-title">{task.taskText}</p>
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
