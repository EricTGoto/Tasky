import React from 'react';
import './style.css';
import uniqid from 'uniqid';
import { format } from 'date-fns';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';

function App() {
  const futureDate = new Date(2057, 5, 4);
  const futureDateFormatted = format(futureDate, 'yyyy-MM-dd');
  const today = new Date();
  const todayFormatted = format(today, 'yyyy-MM-dd');

  const [task, setTask] = React.useState([{
    taskTitle: 'Future task', taskID: uniqid(), dateString: futureDateFormatted, timeString: '16:14',
  },
  {
    taskTitle: 'Today task', taskID: uniqid(), dateString: todayFormatted, timeString: '11:52',
  }]);
  const [showMenus, setShowMenus] = React.useState({
    sidebar: true,
    taskForm: false,
  });

  // taskGroups keeps track of the task groups. by default we have home
  // and today. Home displays all tasks and today displays tasks due today
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
