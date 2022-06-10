import React from 'react';
import './style.css';
import uniqid from 'uniqid';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';

function App() {
  const [task, setTask] = React.useState([{ taskTitle: 'test 1', taskID: uniqid(), date: (new Date()).toString() }, { taskTitle: 'test 2', taskID: uniqid(), date: (new Date()).getUTCDay().toString() }]);
  const [showMenus, setShowMenus] = React.useState({
    sidebar: true,
    taskForm: false,
  });

  // eslint-disable-next-line no-unused-vars
  const [taskGroups, setTaskGroups] = React.useState(['Home', 'Today']);

  function deleteTask(event) {
    setTask((prevTask) => prevTask.filter(
      (individualTask) => individualTask.taskID !== event.target.id,
    ));
  }

  return (
    <div className="app">
      <TaskForm
        setShowMenus={setShowMenus}
        setTask={setTask}
        show={showMenus.taskForm}
        taskGroups={taskGroups}
      />
      <Sidebar show={showMenus.sidebar} taskGroups={taskGroups} />
      <div className="main-elements">
        <Header setShowMenus={setShowMenus} />
        <Tasks tasks={task} deleteFunction={deleteTask} sidebarShowing={showMenus.sidebar} />
      </div>
    </div>
  );
}

export default App;
