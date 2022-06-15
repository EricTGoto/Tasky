import { isThisWeek, isToday, parse, compareAsc, compareDesc } from 'date-fns';

function isItToday(date) {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
  return isToday(parsedDate);
}

function isItThisWeek(date) {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
  return isThisWeek(parsedDate);
}

function parseDateAndTime(dateString, timeString) {
  const dateWithTime = `${dateString}-${timeString}`;
  const parsed = parse(dateWithTime, 'yyyy-MM-dd-HH:mm', new Date());
  return parsed;
}

const sortHelperAsc = function sortHelperAsc(a, b) {
  const parsedA = parseDateAndTime(a.dateString, a.timeString);
  const parsedB = parseDateAndTime(b.dateString, b.timeString);
  return compareAsc(parsedA, parsedB);
};

const sortHelperDesc = function sortHelperDesc(a, b) {
  const parsedA = parseDateAndTime(a.dateString, a.timeString);
  const parsedB = parseDateAndTime(b.dateString, b.timeString);
  return compareDesc(parsedA, parsedB);
};

function sortDatesByAscending(dates) {
  return dates.sort(sortHelperAsc);
}

function sortDatesByDescending(dates) {
  return dates.sort(sortHelperDesc);
}

export { isItToday, isItThisWeek, sortDatesByAscending, sortDatesByDescending };
