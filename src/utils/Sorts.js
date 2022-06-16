import { compareAsc, compareDesc } from 'date-fns';
import { parseDateAndTime } from './DateUtils';

const sortHelperTaskAsc = function sortHelperAsc(taskA, taskB) {
  return taskA.taskGroup[0].localeCompare(taskB.taskGroup[0]);
};

const sortHelperTaskDesc = function sortHelperDesc(taskA, taskB) {
  return -1 * taskA.taskGroup[0].localeCompare(taskB.taskGroup[0]);
};

function sortByTaskGroupAscending(tasks) {
  return tasks.sort(sortHelperTaskAsc);
}

function sortByTaskGroupsDescending(tasks) {
  return tasks.sort(sortHelperTaskDesc);
}

const sortHelperTimeAsc = function sortHelperAsc(a, b) {
  const parsedA = parseDateAndTime(a.dateString, a.timeString);
  const parsedB = parseDateAndTime(b.dateString, b.timeString);
  return compareAsc(parsedA, parsedB);
};

const sortHelperTimeDesc = function sortHelperDesc(a, b) {
  const parsedA = parseDateAndTime(a.dateString, a.timeString);
  const parsedB = parseDateAndTime(b.dateString, b.timeString);
  return compareDesc(parsedA, parsedB);
};

function sortDatesByAscending(dates) {
  return dates.sort(sortHelperTimeAsc);
}

function sortDatesByDescending(dates) {
  return dates.sort(sortHelperTimeDesc);
}

export {
  sortByTaskGroupAscending,
  sortByTaskGroupsDescending,
  sortDatesByAscending,
  sortDatesByDescending,
};
