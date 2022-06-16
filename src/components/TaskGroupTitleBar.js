import React from 'react';
import sliders from '../images/sliders.svg';
import { sortByTaskGroupAscending, sortByTaskGroupsDescending, sortDatesByAscending, sortDatesByDescending } from '../utils/Sorts';

// eslint-disable-next-line no-unused-vars
function TaskGroupTitleBar({ selectedGroup, setTaskInfo }) {
  function showDropDown() {

  }

  function sortTasks(sort) {
    setTaskInfo((prevTaskInfo) => {
      const copy = prevTaskInfo.tasks;
      return ({
        tasks: sort(copy),
        taskGroups: [...prevTaskInfo.taskGroups],
      });
    });
  }

  function selectHandler(e) {
    const { value } = e.target;
    const [category, sortOrder] = value.split(' ');

    if (category === 'date' && sortOrder === 'ascending') {
      sortTasks(sortDatesByAscending);
    } else if (category === 'date' && sortOrder === 'descending') {
      sortTasks(sortDatesByDescending);
    } else if (category === 'group' && sortOrder === 'ascending') {
      sortTasks(sortByTaskGroupAscending);
    } else {
      sortTasks(sortByTaskGroupsDescending);
    }
  }

  return (
    <div className="task-group-title-bar">
      {selectedGroup}
      <label htmlFor="sortingButton" className="sortingButtonLabel">
        <input
          type="image"
          src={sliders}
          id="sortingButton"
          className="sortingButton"
          alt="Sort Tasks"
          onClick={showDropDown}
        />
        Sort By
      </label>
      <select className="taskSorter" onChange={selectHandler}>
        <option value="group ascending">Task Group (A-Z)</option>
        <option value="group descending">Task Group (Z-A)</option>
        <option value="date ascending" selected>Due Date (Newest)</option>
        <option value="date descending">Due Date (Oldest)</option>
      </select>
    </div>
  );
}

export default TaskGroupTitleBar;
