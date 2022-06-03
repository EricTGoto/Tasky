/* eslint-disable no-unused-expressions */
import React from 'react';
import uniqid from 'uniqid';

function TaskForm({ show, setTask }) {
  const [input, setInput] = React.useState('');
  React.useEffect(() => {
    const taskContainer = document.querySelector('.task-container');
    show ? taskContainer.style.display = 'flex' : taskContainer.style.display = 'none';
  }, [show]);

  function handleChange(e) {
    setInput(() => e.target.value);
  }

  function createTask() {
    return ({
      taskText: input,
      taskID: uniqid(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTask((prevTask) => [...prevTask, createTask()]);
  }

  return (
    <div className="task-container">
      <div className="task-form">
        <form onSubmit={handleSubmit}>
          <input
            name="taskInput"
            onChange={handleChange}
            value={input}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
