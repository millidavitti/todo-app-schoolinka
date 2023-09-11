import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function CalendarDate({
	day,
	date,
}: {
	day?: number;
	date?: Date;
}) {
	return new Date().getDate() !== day ? (
		<div
			className='flex flex-col w-fit items-center p-2 px-4 gap-2 outline outline-1 outline-[#D0D5DD] rounded-md'
			id='calender_dates'
		>
			<p className='font-semibold text-xs'>{days[date?.getDay()!] || "Mon"}</p>
			<p className='font-semibold text-xs'>{date?.getDate() || 1}</p>
		</div>
	) : (
		<div
			className='bg-[--cta-color] text-[white] flex flex-col w-fit items-center p-2 px-4 gap-2 outline outline-1 outline-[#D0D5DD] rounded-md'
			id='calender_dates'
		>
			<p className='font-semibold text-xs'>{days[date?.getDay()!] || "Mon"}</p>
			<p className='font-semibold text-xs'>{date?.getDate() || 1}</p>
		</div>
	);
}
