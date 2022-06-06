/* eslint-disable no-unused-expressions */
import React from 'react';
import uniqid from 'uniqid';

function TaskForm({ show, setTask }) {
  // const [input, setInput] = React.useState('');
  const [taskInput, setTaskInput] = React.useState({
    title: '',
    description: '',
  });

  React.useEffect(() => {
    const taskContainer = document.querySelector('.task-form-container');
    show ? taskContainer.style.display = 'flex' : taskContainer.style.display = 'none';
  }, [show]);

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskInput((prevTaskInput) => {
      return ({
        ...prevTaskInput,
        [name]: value,
      });
    });
  }

  function createTask() {
    return ({
      taskTitle: taskInput.title,
      taskID: uniqid(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTask((prevTask) => [...prevTask, createTask()]);
  }

  function closeForm(e) {
    const formModal = e.target;
    formModal.style.display = 'none';
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  return (
    <div className="task-form-container" onClick={closeForm} role="presentation">
      <div className="task-form" onClick={stopPropagation} role="presentation">
        <form onSubmit={handleSubmit}>
          <textarea
            name="title"
            onChange={handleChange}
            value={taskInput.title}
            placeholder="Title: Vaccuum carpet"
            className="form-input"
            maxLength={35}
          />
          <textarea
            name="description"
            onChange={handleChange}
            value={taskInput.description}
            placeholder="Description: Weekly vacuuming of living room carpet"
            className="form-input form-description"
            maxLength={300}
          />
          <label htmlFor="taskDate" className="task-date-container">
            Due Date:
            <input type="date" id="taskDate" className="form-date-selector" />
          </label>
          <label htmlFor="form-task-groups-choice" className="form-task-group-container">
            Task Group:
            <input list="form-task-groups" id="form-task-groups-choice" />
          </label>
          <datalist id="form-task-groups">
            <option value="Chocolate">Chocolate</option>
            <option value="Coconut">Coconut</option>
            <option value="Mint">Mint</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Vanilla">Vanilla</option>
          </datalist>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
