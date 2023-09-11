import { taskMap } from "./mock";

export const globalStateInit = {
	creatingTask: false,
	isTaskDetailsShown: false,
	editingTask: false,
	isCompletedId: "",
	renderedTasks: [],
	pageNumber: 1,
	limit: 4,
	taskMap,
	currentTask: "",
	currentTaskObj: {},
	totalTasks: 0,
};

export const taskStateInit = {
	taskId: "",
	taskDescription: "",
	taskName: "",
	date: "2023-09-10",
	duration: {
		start: "",
		end: "",
	},
	promptOffset: 30, // in minutes
	isCompleted: false,
};
