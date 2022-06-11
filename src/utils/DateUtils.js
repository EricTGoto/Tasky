import { isThisWeek, isToday, parse } from 'date-fns';

function isItToday(date) {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
  return isToday(parsedDate);
}

function isItThisWeek(date) {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
  return isThisWeek(parsedDate);
}

export { isItToday, isItThisWeek };
