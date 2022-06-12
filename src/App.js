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

  // taskInfo contains all tasks and taskGroups. These two are kept in the same
  // state variable as they are often updated together. The default taskGroups
  // are All and today. All displays all tasks and today displays tasks due today
  const [taskInfo, setTaskInfo] = React.useState({
    tasks: [
      {
        taskTitle: 'Future misc task', taskID: uniqid(), dateString: futureDateFormatted, timeString: '16:14', taskGroup: ['www'],
      },
      {
        taskTitle: 'Today Leisure task', taskID: uniqid(), dateString: todayFormatted, timeString: '11:52', taskGroup: ['Leisure', 'Today'],
      },
      {
        taskTitle: 'Today Work Task', taskID: uniqid(), dateString: todayFormatted, timeString: '11:55', taskGroup: ['Work', 'Today'],
      }],
    taskGroups: ['All', 'Today', 'Leisure'],
  });
  const [showMenus, setShowMenus] = React.useState({
    sidebar: true,
    taskForm: false,
  });

  const [selectedGroup, setSelectedGroup] = React.useState('All');

  // also need to delete group if last task of a group gets deleted
  function deleteTask(event) {
    setTaskInfo((prevTaskInfo) => {
      const updatedTasks = prevTaskInfo.tasks.filter(
        (individualTask) => individualTask.taskID !== event.target.id,
      );
      return {
        ...prevTaskInfo,
        tasks: updatedTasks,
      };
    });
  }

  return (
    <div className="app">
      <TaskForm
        setShowMenus={setShowMenus}
        setTask={setTaskInfo}
        show={showMenus.taskForm}
        taskGroups={taskInfo.taskGroups}
        setTaskGroups={taskInfo.setTaskInfo}
      />
      <Sidebar
        show={showMenus.sidebar}
        taskGroups={taskInfo.taskGroups}
        setSelectedGroup={setSelectedGroup}
      />
      <div className="main-elements">
        <Header setShowMenus={setShowMenus} />
        <Tasks
          selectedGroup={selectedGroup}
          tasks={taskInfo.tasks}
          deleteFunction={deleteTask}
          sidebarShowing={showMenus.sidebar}
        />
      </div>
    </div>
  );
}

export default App;
