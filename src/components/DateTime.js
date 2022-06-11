import React from 'react';
import { isItToday } from '../utils/DateUtils';

// called DateTime so it doesn't overlap with the built in Date
// dates from the html date input are formatted 'yyyy-MM-dd'
// want to display it like June 5, 2022, or just the time if the task is due today
function DateTime({ date, time }) {
  return (
    <div className="task-date">{isItToday(date) ? time : date}</div>
  );
}

export default DateTime;
