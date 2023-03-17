export const buildCalendar = (year: number) => {
  const calendar = [];
  const date =  new Date(year, 0, 1);
  while(date.getFullYear() === year){
    calendar.push({
      date: date.toLocaleDateString(),
      tempora: [],
      celebration: [],
      commemoration: []
    });
    date.setDate(date.getDate() + 1);
    console.log(date);
    console.log(calendar);
  }
  console.log(calendar);
  return calendar;
}

