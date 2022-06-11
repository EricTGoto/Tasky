/* eslint-disable no-unused-expressions */
import React from 'react';
import uniqid from 'uniqid';
import { isItToday } from '../utils/DateUtils';
import check from '../images/check.svg';

function TaskForm({ show, setTask, taskGroups }) {
  const [taskInput, setTaskInput] = React.useState({
    title: '',
    description: '',
    date: '',
    time: '',
    taskGroup: '',
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
    const additionalGroups = [];

    if (isItToday(taskInput.dateString)) {
      additionalGroups.push('Today');
    }

    console.log(taskInput);
    return ({
      taskTitle: taskInput.title,
      taskID: uniqid(),
      dateString: taskInput.date,
      timeString: taskInput.time,
      taskGroup: [...additionalGroups, taskInput.taskGroup],
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
            <input name="date" type="date" id="taskDate" className="form-date-selector" onChange={handleChange} />
          </label>
          <input name="time" type="time" id="taskTime" className="form-time-selector" onChange={handleChange} />
          <label htmlFor="form-task-groups-choice" className="form-task-group-container">
            Task Group:
            <input name="taskGroup" list="form-task-groups" id="form-task-groups-choice" onChange={handleChange} />
          </label>
          <datalist id="form-task-groups">
            {taskGroups.map((taskGroup) => {
              return <option value={taskGroup}>{taskGroup}</option>;
            })}
          </datalist>
          <input className="submit-button" type="image" src={check} alt="Submit Form" />
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
