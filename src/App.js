import React from 'react';
import uniqid from 'uniqid';
import './style.css';
import Tasks from './components/Tasks';
import Header from './components/Header';

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
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          name="taskInput"
          onChange={handleChange}
          value={input}
        />
        <button type="submit">Submit</button>
      </form>
      <Tasks tasks={task} deleteFunction={deleteTask} />
    </div>
  );
}

export default App;
