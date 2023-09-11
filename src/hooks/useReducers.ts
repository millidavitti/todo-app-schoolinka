import { globalReducer, taskStateReducer } from "@/utils/reducer";
import { globalStateInit, taskStateInit } from "@/utils/state";
import { useReducer } from "react";

export default function useReducers() {
	const [globalState, globalStateDispatch] = useReducer(
		globalReducer,
		globalStateInit,
	);
	const [taskState, taskStateDispatch] = useReducer(
		taskStateReducer,
		taskStateInit,
	);
	return {
		globalState,
		globalStateDispatch,
		taskState,
		taskStateDispatch,
	};
}
