import React, { useEffect, useReducer } from "react";
import { Portal } from "./Portal";
import Close from "@/icons/Icon.close";
import Calendar from "@/icons/Icon.calendar";
import Clock from "@/icons/Icon.clock";
import Bell from "@/icons/Icon.bell";
import { GlobalStateReducer, TaskStateInit } from "@/utils/interface";
import TaskNameEdit from "./EditTaskName";

export default function EditTask({
	globalState,
	globalStateDispatch,
}: GlobalStateReducer) {
	const [editingState, editingStateDispatch] = useReducer(
		editingStateReducer,
		editingStateInit,
	);

	useEffect(() => {
		editingStateDispatch({ type: "sync", task: globalState.currentTaskObj });
	}, [globalState.currentTaskObj]);

	return (
		<>
			{globalState.editingTask && (
				<Portal portal='portal'>
					<div
						className='flex flex-col fixed inset-0 bg-[#34405428] justify-end'
						id='overlay'
						onClick={() => {
							globalStateDispatch({ type: "edit_task", data: false });
						}}
					>
						{/* Modal */}
						<div
							className=' flex flex-col gap-4 h-[80%] bg-white rounded-xl p-4'
							id='create_task'
							onClick={(e) => e.stopPropagation()}
						>
							<div
								className='flex justify-between items-center'
								id='create_task_header'
							>
								<TaskNameEdit
									editingState={editingState}
									editingStateDispatch={editingStateDispatch}
								/>

								<Close
									className='w-6 h-6 fill-[--outline]'
									id='close'
									onClick={() => {
										globalStateDispatch({ type: "edit_task", data: false });
									}}
								/>
							</div>

							<textarea
								value={editingState.taskDescription}
								rows={10}
								className='outline outline-[--outline] outline-1 w-full p-2 rounded-lg'
								placeholder='Your task'
								onChange={(e) => {
									editingStateDispatch({
										type: "edit_task",
										taskDescription: e.target.value,
										field: "taskDescription",
									});
								}}
							/>

							<div className='flex justify-between text-[--bold-grey]' id=''>
								<div className='rounded-lg flex outline outline-1 outline-[--outline] p-4  py-2 gap-2 items-center'>
									<Calendar />
									<p className='text-sm font-semibold'>
										{new Date(editingState.date).toDateString()}
									</p>
								</div>
								<div className='rounded-lg flex outline outline-1 outline-[--outline] p-4  py-2 gap-2 items-center'>
									<Clock />
									<p className='text-sm font-semibold'>
										{editingState.duration.start}
									</p>
								</div>
								<div className='rounded-lg flex outline outline-1 outline-[--outline] p-4  py-2 gap-2 items-center'>
									<Clock />
									<p className='text-sm font-semibold'>
										{editingState.duration.start}
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
								<Close
									className='w-4 h-4 fill-[--icons]'
									onClick={() =>
										globalStateDispatch({ type: "edit_task", data: false })
									}
								/>
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
										globalStateDispatch({ type: "edit_task", data: false })
									}
								>
									Cancel
								</button>

								<button
									className='transform transition duration-[250ms] ease-in-out active:scale-[.97] py-2 px-5 w-full outline outline-1 outline-[--outline] rounded-lg bg-[--cta-color] text-white font-semibold'
									onClick={() => {
										globalStateDispatch({
											type: "save_edit",
											task: editingState,
										});
										globalStateDispatch({ type: "edit_task", data: false });
									}}
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
}

const editingStateInit = {
	taskId: "",
	taskDescription: "",
	taskName: "",
	date: "2023-09-10",
	duration: {
		start: "",
		end: "",
	},
	promptOffset: 30,
	isCompleted: false,
};
function editingStateReducer(state: TaskStateInit, action: any) {
	switch (action.type) {
		case "sync":
			return { ...state, ...action.task };
		case "edit_task":
			return {
				...state,
				[action.field]: action[action.field],
			};

		default:
			return state;
	}
}
