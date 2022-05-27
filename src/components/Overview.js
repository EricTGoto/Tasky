import React from 'react';

function Overview({ tasks, deleteFunction }) {
	const taskList = tasks.map((task) => {
		return (
  		<div key={task.taskID}>
    		<p>{task.taskText}</p>
    		<button id={task.taskID} onClick={deleteFunction}>Delete</button>
    	</div>
  	)}
	);
  return (
    <div>
      {taskList}
    </div>
  );
}

export default Overview;
