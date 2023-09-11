import { Calendar } from "./interface";

export function formatTime(date: Date): String {
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	return `${hours}:${minutes}`;
}

export function highlightContent(element: HTMLElement) {
	const range = document.createRange();
	range.selectNodeContents(element);

	const selection = window.getSelection();
	if (selection) {
		selection.removeAllRanges();
		selection.addRange(range);
	}
}

export function createCalendar(year: number, month: number) {
	const startDate = new Date(year, month - 1, 1);
	const endDate = new Date(year, month, 0);

	const numDays = endDate.getDate();

	const calendar = [];

	// Start from startDate, not 1
	for (let i = 0; i < numDays; i++) {
		const date = new Date(year, month - 1, i + 1);
		const dayOfWeek = date.getDay();

		calendar.push({
			date: date,
			dayOfMonth: i,
			dayOfWeek: dayOfWeek,
		});
	}

	return calendar;
}

// Example usage:
const year = 2023;
const month = 9; // September (1-based month)
const calendarData = createCalendar(year, month);
console.log(calendarData);

export function generateCalendar(month: number, year: number): Calendar[] {
	const calendar: Calendar[] = [];

	const monthStart = new Date(year, month).getDay();

	const daysInMonth = getDaysInMonth(month, year);

	for (let i = 1; i <= daysInMonth + monthStart; i++) {
		if (i > monthStart) {
			const date = new Date(year, month, i - monthStart);
			const day = i - monthStart;

			calendar.push({
				date,
				month,
				day,
			});
		}
	}

	return calendar;

	// Subroutines

	function getDaysInMonth(month: number, year: number) {
		// February logic

		if (month === 1) {
			return isLeapYear(year) ? 29 : 28;
		} else {
			return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		}
		function isLeapYear(year: number) {
			return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		}
	}
}
