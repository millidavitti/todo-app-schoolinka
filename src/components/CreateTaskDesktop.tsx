import React, { Dispatch, useEffect } from "react";
import { Portal } from "./Portal";
import Close from "@/icons/Icon.close";
import Calendar from "@/icons/Icon.calendar";
import Clock from "@/icons/Icon.clock";
import Bell from "@/icons/Icon.bell";
import {
	ClickEvent,
	GlobalStateInit,
	GlobalStateReducer,
	TaskStateInit,
} from "@/utils/interface";
import useReducers from "@/hooks/useReducers";
import CreateTaskName from "./CreateTaskName";
import { formatTime } from "@/utils/helpers";

export default function CreateTaskDesktop({
	globalState,
	globalStateDispatch,
	taskState,
	taskStateDispatch,
}: {
	globalState: GlobalStateInit;
	globalStateDispatch: Dispatch<any>;
	taskState: TaskStateInit;
	taskStateDispatch: Dispatch<any>;
}) {
	console.log(taskState);
	useEffect(() => {
		taskStateDispatch({
			type: "mark_completed_or_not",
			taskId: globalState.isCompletedId,
		});
	}, [globalState.isCompletedId]);

	return (
		<>
			{globalState.creatingTask && (
				<Portal portal='side_bar'>
					{/* Modal */}
					<div
						className='flex flex-col absolute inset-0 gap-4  bg-white rounded-xl p-4'
						id='create_task'
						onClick={(e: ClickEvent) => e.stopPropagation()}
					>
						<div
							className='flex justify-between items-center'
							id='create_task_header'
						>
							<CreateTaskName
								taskState={taskState}
								taskStateDispatch={taskStateDispatch}
							/>
							<Close
								className='w-6 h-6 fill-[--outline]'
								onClick={() =>
									globalStateDispatch({ type: "create_task", data: false })
								}
							/>
						</div>

						<textarea
							rows={10}
							className='outline outline-[--outline] outline-1 w-full p-2 rounded-lg'
							onChange={(e) =>
								taskStateDispatch({
									type: "create_task",
									taskDescription: e.target.value,
									field: "taskDescription",
								})
							}
						/>

						<div className='flex justify-between text-[--bold-grey]' id=''>
							<div className='transform transition duration-[250ms] ease-in-out active:scale-[.97] rounded-lg flex outline outline-1 outline-[--outline] p-4 py-2 gap-2 items-center'>
								<Calendar />
								<p
									className='text-sm font-semibold'
									onClick={() =>
										taskStateDispatch({
											type: "create_task",
											date: new Date().toISOString(),
											field: "date",
										})
									}
								>
									Today
								</p>
							</div>
							<div className='transform transition ease-in-out active:scale-[.97] rounded-lg flex outline outline-1 outline-[--outline] p-4 py-2 gap-2 items-center'>
								<Clock />
								<p
									className='text-sm font-semibold'
									onClick={() =>
										taskStateDispatch({
											type: "create_task",
											duration: {
												start: formatTime(new Date()),
											},
											field: "duration start",
										})
									}
								>
									00:00
								</p>
							</div>
							<div className='transform transition ease-in-out active:scale-[.97] rounded-lg flex outline outline-1 outline-[--outline] p-4  py-2 gap-2 items-center'>
								<Clock />
								<p
									className='text-sm font-semibold'
									onClick={() =>
										taskStateDispatch({
											type: "create_task",
											duration: {
												end: formatTime(new Date()),
											},
											field: "duration end",
										})
									}
								>
									00:00
								</p>
							</div>
						</div>

						{/* Reminder Bell */}
						<div className='flex gap-2 justify-between items-center'>
							<div className='flex gap-2 items-center'>
								<Bell className='fill-[--icons]' />
								<p className='font-medium text-base text-[--regular-text]'>
									10 minutes before
								</p>
							</div>
							<Close className='w-4 h-4 fill-[--icons]' />
						</div>

						{/* Action Items */}
						<div className='flex gap-4'>
							<button
								style={{
									transitionProperty: "transform, background-color",
									transitionDuration: "250ms, 50ms",
								}}
								className='transform transition ease-in-out active:scale-[.97] active:bg-slate-200 py-2 px-5 w-full outline outline-1 outline-[--outline] rounded-lg font-semibold'
								onClick={() =>
									globalStateDispatch({ type: "create_task", data: false })
								}
							>
								Cancel
							</button>

							<button
								className='transform transition duration-[250ms] ease-in-out active:scale-[.97] py-2 px-5 w-full outline outline-1 outline-[--outline] rounded-lg bg-[--cta-color] text-white font-semibold'
								onClick={() => {
									taskState.taskId &&
										taskState.taskDescription &&
										taskState.taskName &&
										globalStateDispatch({
											type: "queue_task",
											task: taskState,
										});
									taskStateDispatch({ type: "reset_state" });
									globalStateDispatch({ type: "create_task", data: false });
								}}
							>
								Add
							</button>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
}
