import {
	GlobalStateReducer,
	EditingStateReducer,
	TaskStateInit,
	StateReducer,
	TaskStateReducer,
} from "@/utils/interface";
import { useState } from "react";

export default function CreateTaskName({
	taskState,
	taskStateDispatch,
}: TaskStateReducer) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			{isEditing ? (
				<input
					className='p-2'
					type='text'
					value={taskState.taskName}
					onChange={(e) => {
						taskStateDispatch({
							type: "create_task",
							taskName: e.target.value,
							field: "taskName",
						});
					}}
					onBlur={() => {
						setIsEditing(false);

						taskStateDispatch({
							type: "create_task",
							taskName: taskState.taskName,
							field: "taskName",
						});
					}}
					autoFocus
				/>
			) : (
				<h2
					className='font-semibold text-lg p-2'
					onClick={() => setIsEditing(true)}
				>
					{taskState.taskName || "Add Task"}
				</h2>
			)}
		</>
	);
}
