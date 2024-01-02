import { getYear } from 'date-fns';
import { Calendar } from './calendar';

function getDate(date: string) {
	const calendar = new Calendar(getYear(date));

	const day = calendar.get(date);

	const proper = day?.getProper();

	console.log('proper', proper);

	return proper;
}

function getCalendar(year: number) {
	const calendar = new Calendar(year);

	return calendar;
}

export { getDate, getCalendar };
