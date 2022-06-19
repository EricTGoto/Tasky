import React, { useRef } from 'react';
import sliders from '../images/sliders.svg';
import { sortByTaskGroupAscending, sortByTaskGroupsDescending, sortByDatesAscending, sortByDatesDescending } from '../utils/Sorts';

function TaskGroupTitleBar({ selectedGroup, setTaskInfo }) {
  const dropDownRef = useRef(null);

  function showHideDropDown() {
    const currentStyle = dropDownRef.current.style.display;
    if (currentStyle === 'none') {
      dropDownRef.current.style.display = 'block';
    } else {
      dropDownRef.current.style.display = 'none';
    }
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
      sortTasks(sortByDatesAscending);
    } else if (category === 'date' && sortOrder === 'descending') {
      sortTasks(sortByDatesDescending);
    } else if (category === 'group' && sortOrder === 'ascending') {
      sortTasks(sortByTaskGroupAscending);
    } else {
      sortTasks(sortByTaskGroupsDescending);
    }
    dropDownRef.current.style.display = 'none';
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
          onClick={showHideDropDown}
        />
        Sort By
      </label>
      <select ref={dropDownRef} size={4} className="taskSorter" onChange={selectHandler}>
        <option className="sorter-option" value="group ascending">Task Group (A-Z)</option>
        <option className="sorter-option" value="group descending">Task Group (Z-A)</option>
        <option className="sorter-option" value="date ascending" selected>Due Date (Newest)</option>
        <option className="sorter-option" value="date descending">Due Date (Oldest)</option>
      </select>
    </div>
  );
}

export default TaskGroupTitleBar;