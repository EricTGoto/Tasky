import React from 'react';
import './style.css';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';

function App() {
  const [task, setTask] = React.useState([]);
  const [showMenus, setShowMenus] = React.useState({
    sidebar: false,
    taskForm: false,
  });

  function deleteTask(event) {
    setTask((prevTask) => prevTask.filter(
      (individualTask) => individualTask.taskID !== event.target.id,
    ));
  }

  return (
    <div className="app">
      <TaskForm setShowMenus={setShowMenus} setTask={setTask} show={showMenus.taskForm} />
      <Sidebar show={showMenus.sidebar} />
      <div className="main-elements">
        <Header setShowMenus={setShowMenus} />
        <Tasks tasks={task} deleteFunction={deleteTask} />
      </div>
    </div>
  );
}

export default App;
