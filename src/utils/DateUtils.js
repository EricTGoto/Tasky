import { isThisWeek, isToday, parse } from 'date-fns';

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

export { isItToday, isItThisWeek, parseDateAndTime };
