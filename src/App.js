import React from 'react';
import uniqid from 'uniqid';
import Tasks from './components/Tasks';
import './style.css';

function App() {
  const [task, setTask] = React.useState([]);
  const [input, setInput] = React.useState('');

  function createTask() {
    return ({
      taskText: input,
      taskID: uniqid(),
    });
  }

  function deleteTask(event) {
    setTask((prevTask) => prevTask.filter(
      (individualTask) => individualTask.taskID !== event.target.id,
    ));
  }

  function handleChange(e) {
    setInput(() => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTask((prevTask) => [...prevTask, createTask()]);
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          name="taskInput"
          onChange={handleChange}
          value={input}
        />
        <button type="submit">Submit</button>
        <Tasks tasks={task} deleteFunction={deleteTask} />
      </form>
    </div>
  );
}

export default App;
