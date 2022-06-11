import React from 'react';
import { isToday, parse } from 'date-fns';

// called DateTime so it doesn't overlap with the built in Date
// dates from the html date input are formatted 'yyyy-MM-dd'
// want to display it like June 5, 2022, or just the time if the task is due today
function DateTime({ date, time }) {
  function isItToday() {
    console.log(date);
    const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    console.log(parsedDate);
    return isToday(parsedDate);
  }

  return (
    <div>{isItToday() ? time : date}</div>
  );
}

export default DateTime;
