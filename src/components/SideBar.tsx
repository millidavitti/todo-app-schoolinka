import React from "react";
import Calendar from "react-calendar";
import CreateTask from "./CreateTask";
import { GlobalStateReducer } from "@/utils/interface";
import { Portal } from "./Portal";
import CreateTaskName from "./CreateTaskName";

export default function SideBar({
	globalState,
	globalStateDispatch,
}: GlobalStateReducer) {
	return (
		<div
			className='hidden w-[40%] outline flex-shrink-0 h-[395px] lg:block relative'
			id='side_bar'
		>
			<Calendar className='w-[40%] outline' />;{/* Portals */}
		</div>
	);
}
