import Plus from "@/icons/Icon.plus";
import Section from "@/components/Section";
import Container from "@/components/Container";
import CalendarDate from "@/components/CalendarDate";
import Task from "@/components/Task";
import Microphone from "@/icons/Icon.microphone";
import CreateTask from "@/components/CreateTask";
import useReducers from "@/hooks/useReducers";
import TaskDetails from "@/components/TaskDetails";
import EditTask from "@/components/EditTask";
import { TaskStateInit } from "@/utils/interface";
import { useEffect, useRef, useState } from "react";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";
import Calendar from "react-calendar";
import { generateCalendar } from "@/utils/helpers";
import SideBar from "@/components/SideBar";
import { useSaveToLocalStorage } from "@/hooks/useSaveToLocalStorage";
import { useGetFromLocalStorage } from "@/hooks/useGetFromLocalStorage";
import CreateTaskDesktop from "@/components/CreateTaskDesktop";
const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export default function Home() {
	const { globalState, globalStateDispatch } = useReducers();
	const pageNumber = useRef(1);
	console.log(globalState);

	// useSaveToLocalStorage(globalState, "globalState");
	// const cahce = useGetFromLocalStorage("globalState", globalStateDispatch);

	useEffect(() => {
		globalStateDispatch({ type: "get_tasks" });
	}, [globalState.taskMap]);

	return (
		<>
			<Layout>
				<Section>
					<Container className='container py-8 flex justify-between items-center'>
						<article>
							<h2 className='font-semibold text-2xl'>Good Morning!</h2>
							<p>You've got some task to do</p>
						</article>
						<button
							className='flex gap-2 items-center h-fit transform transition duration-[250ms] ease-in-out active:scale-[.97] py-1 px-5 outline outline-1 outline-[--outline] rounded-lg bg-[--cta-color] text-white font-semibold'
							onClick={() =>
								globalStateDispatch({ type: "create_task", data: true })
							}
						>
							<span>
								<Plus className='fill-[white]' />
							</span>
							Create Task
						</button>
					</Container>
				</Section>

				{/* Main section */}

				<Section className=' flex w-full h-full lg: justify-center px-8 outline'>
					<Container className='flex gap-4 container py-8 pt-0 w-full'>
						{/*  */}

						{/* Task and Pagination */}

						<Container className='container w-full lg:w-[60%] flex-shrink'>
							<Container>
								<div className='flex flex-col gap-4 '>
									<h2 className='font-semibold text-xs'>
										{monthNames[new Date().getMonth()]}{" "}
										{new Date().getFullYear()}
									</h2>
									<div className='flex overflow-x-auto gap-4 p-2'>
										{/* Dates */}

										{generateCalendar(
											new Date().getMonth(),
											new Date().getFullYear(),
										).map((date) => {
											return new Date().getDate() > date.date.getDate() + 3 ? (
												<></>
											) : (
												<CalendarDate
													date={date.date}
													day={date.day}
													key={crypto.randomUUID()}
												/>
											);
										})}
									</div>
								</div>
							</Container>

							<Container className='container py-0'>
								<div className='flex flex-col gap-4'>
									<h2 className='font-semibold text-base'>My Tasks</h2>

									<div className='flex flex-col gap-4 max-h-[635px] overflow-y-auto'>
										{/* My Task */}
										{globalState.renderedTasks.map((task: TaskStateInit) => (
											<Task
												key={task.taskId}
												task={task}
												globalState={globalState}
												globalStateDispatch={globalStateDispatch}
											/>
										))}
									</div>
								</div>
							</Container>

							{/* Mobile Pagination */}

							<Container className='item-center py-4 flex justify-center lg:hidden'>
								{pageNumber.current * globalState.limit <
									Object.entries(globalState.taskMap).length && (
									<button
										className='transform transition duration-[250ms] ease-in-out active:scale-[.97] py-2 px-5 w-fit outline outline-1 outline-[--outline] rounded-lg bg-[--cta-color] text-white font-semibold '
										onClick={() => {
											globalStateDispatch({
												type: "load_more",
												pageNumber: ++pageNumber.current,
											});
										}}
									>
										Load More
									</button>
								)}
							</Container>

							{/* Desktop Pagination */}

							<Container className='hidden lg:flex container py-0'>
								<Pagination
									pageNumber={pageNumber}
									globalState={globalState}
									globalStateDispatch={globalStateDispatch}
								/>
							</Container>
						</Container>

						{/* Sidebar */}

						<SideBar
							globalState={globalState}
							globalStateDispatch={globalStateDispatch}
						/>
					</Container>
				</Section>
			</Layout>
			{/* Outside the document flow */}

			{/* Input Task */}

			<Section className='w-full px-4 fixed bottom-0 bg-white flex justify-center lg:hidden'>
				<Container
					className='container py-2'
					onClick={() =>
						globalStateDispatch({ type: "create_task", data: true })
					}
				>
					<form className='flex gap-4 items-center justify-between outline outline-1 outline-[--outline] rounded-lg px-2'>
						<input
							type='text'
							placeholder='Input task'
							className='p-2 focus:outline-none'
						/>
						<Microphone className='fill-[--cta-color] w-5 h-5' />
					</form>
				</Container>
			</Section>

			{/* Portals */}

			{/* <CreateTaskHOC /> */}
			<CreateTask
				globalState={globalState}
				globalStateDispatch={globalStateDispatch}
			/>

			<TaskDetails
				globalState={globalState}
				globalStateDispatch={globalStateDispatch}
			/>
			<EditTask
				globalState={globalState}
				globalStateDispatch={globalStateDispatch}
			/>
		</>
	);
}
