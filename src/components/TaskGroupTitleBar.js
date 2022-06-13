import React from 'react';
import sliders from '../images/sliders.svg';

function TaskGroupTitleBar({ selectedGroup }) {
  return (
    <div className="task-group-title-bar">
      {selectedGroup}
      <label htmlFor="sortingButton" className="sortingButtonLabel">
        <input type="image" src={sliders} id="sortingButton" className="sortingButton" alt="Sort Tasks" />
        Sort
      </label>
    </div>
  );
}

export default TaskGroupTitleBar;
