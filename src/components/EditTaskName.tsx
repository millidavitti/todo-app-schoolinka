import { highlightContent } from "@/utils/helpers";
import {
	GlobalStateReducer,
	EditingStateReducer,
	TaskStateInit,
	StateReducer,
	ClickEvent,
} from "@/utils/interface";
import { useState } from "react";

export default function TaskNameEdit({
	editingState,
	editingStateDispatch,
}: EditingStateReducer) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			{isEditing ? (
				<input
					className='p-2'
					type='text'
					value={editingState.taskName}
					onChange={(e) => {
						editingStateDispatch({
							type: "edit_task",
							taskName: e.target.value,
							field: "taskName",
						});
					}}
					onBlur={() => {
						setIsEditing(false);

						editingStateDispatch({
							type: "edit_task",
							taskName: editingState.taskName,
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
					{editingState.taskName}
				</h2>
			)}
		</>
	);
}
