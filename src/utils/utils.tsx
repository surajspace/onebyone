const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function getDateArray(timestamp: number) {
  const dateObj = new Date(timestamp);
  return {
    date: dateObj.getDate(),
    month: months[dateObj.getMonth()],
    weekday: weekdays[dateObj.getDay()],
  };
}
