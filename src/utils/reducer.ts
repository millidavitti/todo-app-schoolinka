import { GlobalStateInit, TaskStateInit } from "./interface";
import { taskStateInit } from "./state";

export function globalReducer(state: GlobalStateInit, action: any) {
	switch (action.type) {
		case "create_task":
			return { ...state, creatingTask: action.data };
		case "show_task_details":
			return {
				...state,
				isTaskDetailsShown: action.data,
			};
		case "edit_task":
			return {
				...state,
				editingTask: action.data,
				isTaskDetailsShown: !action.data,
			};
		case "queue_task":
			state.taskMap[action.task.taskId] = action.task;
			return { ...state };
		case "current_task":
			return { ...state, currentTask: action.taskId };
		case "current_task_obj":
			return { ...state, currentTaskObj: action.task };
		case "save_edit":
			state.taskMap[action.task.taskId] = action.task;
			return { ...state };
		case "delete_task": {
			delete state.taskMap[action.taskId];
			const renderedTasks = state.renderedTasks.filter(
				(task) => action.taskId !== task.taskId,
			);
			return { ...state, renderedTasks };
		}
		case "identify_is_completed":
			state.isCompletedId = action.taskId;
			state.taskMap[action.taskId].isCompleted = action.checked;
			return { ...state };
		case "get_tasks": {
			const renderedTasks = Object.values(state.taskMap)
				.reverse()
				.slice(0, state.limit);
			return {
				...state,
				renderedTasks,
				totalTasks: Object.values(state.taskMap).length,
			};
		}
		case "load_more": {
			let offset = 0;
			const renderedTasks = Object.values(state.taskMap)
				.reverse()
				.slice(
					offset * (action.pageNumber - 1),
					state.limit * action.pageNumber,
				);

			return { ...state, pageNumber: action.pageNumber, renderedTasks };
		}
		case "local_storage":
			return { ...state, ...action.data };
		default:
			return state;
	}
}

export function taskStateReducer(state: TaskStateInit, action: any) {
	switch (action.type) {
		case "create_task":
			if (action.field.includes("duration"))
				if (action.field.includes("start"))
					return {
						...state,
						duration: { ...state.duration, start: action.duration.start },
					};
				else if (action.field.includes("end"))
					return {
						...state,
						duration: { ...state.duration, end: action.duration.end },
					};
			return {
				...state,
				taskId: crypto.randomUUID(),
				[action.field]: action[action.field],
			};
		case "reset_state":
			return { ...taskStateInit };
		default:
			return state;
	}
}
