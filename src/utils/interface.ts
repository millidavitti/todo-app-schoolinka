import React, { Dispatch } from "react";

export interface GlobalStateInit {
	creatingTask: boolean;
	isTaskDetailsShown: boolean;
	editingTask: boolean;
	isCompletedId: string;
	renderedTasks: TaskStateInit[];
	pageNumber: number;
	limit: number;
	taskMap: TaskMap;
	currentTask: string;
	currentTaskObj: TaskStateInit | Object;
	totalTasks: number;
}

export interface CreateTaskProps {
	globalState: GlobalStateInit;
	globalStateDispatch: Dispatch<any>;
}

export interface TaskStateInit {
	taskId: string;
	taskDescription: string;
	taskName: string;
	date: string;
	duration: {
		start: string;
		end: string;
	};
	promptOffset: number;
	isCompleted: boolean;
}

export interface ClickEvent extends React.MouseEvent<HTMLDivElement> {
	target: HTMLElement;
}

export interface TaskProps {
	task: TaskStateInit;
	globalState: GlobalStateInit;
	globalStateDispatch: Dispatch<any>;
}

export interface TaskDetailProps {
	globalState: GlobalStateInit;
	globalStateDispatch: Dispatch<any>;
}

export interface EditingStateReducer {
	editingState: TaskStateInit;
	editingStateDispatch: Dispatch<any>;
}
export interface TaskStateReducer {
	taskState: TaskStateInit;
	taskStateDispatch: Dispatch<any>;
}

export interface TaskMap {
	[taskId: string]: TaskStateInit;
}

export interface StateReducer<State> {
	(payload: Partial<State>): void;
}

export interface GlobalStateReducer {
	globalState: GlobalStateInit;
	globalStateDispatch: Dispatch<any>;
}

export interface ClickEvent extends React.MouseEvent<HTMLDivElement> {
	target: HTMLElement;
}

export interface Calendar {
	date: Date;
	month: number;
	day: number;
}
