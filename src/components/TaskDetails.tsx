import Calendar from "@/icons/Icon.calendar";
import Clock from "@/icons/Icon.clock";
import Close from "@/icons/Icon.close";
import React, { Dispatch, SetStateAction } from "react";
import { Portal } from "./Portal";
import { TaskDetailProps } from "@/utils/interface";

export default function TaskDetails({
	globalState,
	globalStateDispatch,
}: TaskDetailProps) {
	const task = globalState.taskMap[globalState.currentTask];

	return (
		<>
			{globalState.isTaskDetailsShown && (
				<Portal portal='portal'>
					<div
						className='flex flex-col fixed inset-0 bg-[#34405428] justify-end'
						id='overlay'
						onClick={() => {
							globalStateDispatch({ type: "show_task_details", data: false });
						}}
					>
						{/* Modal */}

						<div
							className='flex flex-col h-[80%] bg-white p-4 rounded-[24px] gap-4'
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<Close
								className='w-6 h-6 fill-[--outline] self-end'
								id='close'
								onClick={() => {
									globalStateDispatch({
										type: "show_task_details",
										data: false,
									});
								}}
							/>

							<div className='flex flex-col gap-4 '>
								<div className='flex flex-col gap-4'>
									<h2 className='font-semibold text-lg'>{task?.taskName}</h2>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<Calendar className='fill-[--cta-color]' />
											<p className='text-sm font-medium items-center'>
												{new Date(task?.date!).toDateString()}
											</p>
										</div>
										<div className='flex gap-2'>
											<Clock className='fill-[--cta-color]' />
											<p className='text-sm font-medium'>8:00 - 10:00 AM</p>
										</div>
									</div>
								</div>
							</div>

							<div className='flex gap-4'>
								<button
									className='transform transition ease-in-out active:scale-[.97] active:bg-slate-200 py-2 px-5 w-full outline outline-1 outline-[--outline] rounded-lg font-semibold'
									onClick={() => {
										globalStateDispatch({
											type: "delete_task",
											taskId: globalState.currentTask,
										});
										globalStateDispatch({
											type: "show_task_details",
											data: false,
										});
									}}
								>
									Delete
								</button>
								<button
									className='transform transition duration-[250ms] ease-in-out active:scale-[.97] py-2 px-5 w-full outline outline-1 outline-[--outline] rounded-lg bg-[--cta-color] text-white font-semibold'
									onClick={() => {
										globalStateDispatch({ type: "edit_task", data: true });
										globalStateDispatch({ type: "current_task_obj", task });
									}}
								>
									Edit
								</button>
							</div>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
}
