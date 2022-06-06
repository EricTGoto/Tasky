/* eslint-disable no-unused-expressions */
import React from 'react';
import uniqid from 'uniqid';
import check from '../images/check.svg';

function TaskForm({ show, setTask }) {
  const [taskInput, setTaskInput] = React.useState({
    title: '',
    description: '',
    date: '',
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

  // creates an individual task, remember to modify this when the task data structure changes
  function createTask() {
    return ({
      taskTitle: taskInput.title,
      taskID: uniqid(),
      date: taskInput.date,
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

  function captureDateChange(e) {
    const { name, value } = e.target;
    setTaskInput((prevtaskInput) => {
      return ({
        ...prevtaskInput,
        [name]: value,
      });
    });
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
            required
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
            <input name="date" type="date" id="taskDate" className="form-date-selector" onChange={captureDateChange} />
          </label>
          <input name="time" type="time" id="taskTime" className="form-time-selector" onChange={captureDateChange} />
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
          <input className="submit-button" type="image" src={check} alt="Submit Form" />
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
