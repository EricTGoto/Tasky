import { isThisWeek, isToday, parse, compareAsc } from 'date-fns';

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

const sortHelper = function sortHelper(a, b) {
  const parsedA = parseDateAndTime(a.dateString, a.timeString);
  const parsedB = parseDateAndTime(b.dateString, b.timeString);
  return compareAsc(parsedA, parsedB);
};

function sortDatesByAscending(dates) {
  return dates.sort(sortHelper);
}

export { isItToday, isItThisWeek, sortDatesByAscending };
