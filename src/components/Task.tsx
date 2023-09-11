import React, { useEffect } from "react";
import { TaskProps } from "@/utils/interface";

export default function Task({
	task,

	globalStateDispatch,
}: TaskProps) {
	return (
		<div
			className='flex gap-2 items-center justify-between bg-[--grey-200] p-2 border-b-2 border-b-[--outline]'
			onClick={() => {
				globalStateDispatch({ type: "show_task_details", data: true });
				globalStateDispatch({ type: "current_task", taskId: task.taskId });
			}}
			id='task'
		>
			<div className='flex items-center gap-2'>
				<label>
					<input
						type='checkbox'
						checked={task.isCompleted}
						className='w-4 h-4 outline outline-1 bg-white outline-[#D0D5DD]'
						id={task.taskId}
						onClick={(e) => {
							globalStateDispatch({
								type: "identify_is_completed",
								taskId: e.currentTarget.id,
								checked: e.currentTarget.checked,
							});

							e.stopPropagation();
						}}
					/>
				</label>
				{/*  */}
				<div className='flex flex-col'>
					<p
						className={`text-[14px] font-semibold ${
							task.isCompleted && "line-through text-[--outline]"
						}`}
					>
						{task.taskName || "Task Name"}
					</p>
					<p
						className={`text-[14px] ${
							task.isCompleted && "line-through text-[--outline]"
						}`}
					>
						{`${task.duration.start} - ${task.duration.end}` ||
							"10:30 am - 11:30 am"}
					</p>
				</div>
			</div>
			<p className='text-[14px]'>Today</p> {/*Work Sans */}
		</div>
	);
}
