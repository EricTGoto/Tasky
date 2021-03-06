import React from 'react';
import trash from '../images/trash.svg';
import edit from '../images/edit.svg';
import Date from './DateTime';
import TaskGroupTitleBar from './TaskGroupTitleBar';

function Tasks({ selectedGroup, tasks, deleteFunction, sidebarShowing, setTaskInfo }) {
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

  const taskList = function taskList() {
    let filteredTasks = [...tasks];
    if (selectedGroup !== 'All') {
      filteredTasks = tasks.filter((task) => task.taskGroup.includes(selectedGroup));
    }
    filteredTasks = filteredTasks.map((task) => {
      return (
        <div key={task.taskID} className="task">
          <div className="task-left">
            <p contentEditable={editable} role="presentation" className="task-title">{task.taskTitle}</p>
            <Date date={task.dateString} time={task.timeString} />
          </div>
          <div className="task-right">
            <div className="task-group">{task.taskGroup[0]}</div>
            <input type="image" className="task-button" src={edit} onClick={handleEdit} alt="edit" />
            <input type="image" className="task-button" src={trash} id={task.taskID} alt="delete" onClick={deleteFunction} />
          </div>
        </div>
      );
    });
    return filteredTasks;
  };

  return (
    <main className="task-container">
      <TaskGroupTitleBar
        selectedGroup={selectedGroup}
        setTaskInfo={setTaskInfo}
      />
      <div className="tasks">
        {taskList()}
      </div>
    </main>
  );
}

export default Tasks;
