import { TaskStateInit } from "./interface";

const tasks: TaskStateInit[] = [
	{
		taskId: "1f23fb56-eae5-4f9a-924f-189721f58061",
		taskDescription:
			"This is a 30-word description for task 1 that should help provide more context and details about what this task entails and what needs to be done",
		taskName: "Task 1",
		date: "2023-09-10T00:00:00.000Z",
		duration: {
			start: "10:00",
			end: "11:30",
		},
		promptOffset: 15,
		isCompleted: false,
	},
	{
		taskId: "2e4d810a-ffe4-4570-a8d3-3166930835bb",
		taskDescription:
			"Here is a 30-word description for the second task in this list that describes the details and requirements in a longer form",
		taskName: "Task 2",
		date: "2023-09-11T00:00:00.000Z",
		duration: {
			start: "02:00",
			end: "03:30",
		},
		promptOffset: 30,
		isCompleted: false,
	},
	{
		taskId: "62e4670c-b15c-4d48-bd0b-6f004060e93d",
		taskDescription:
			"This is a detailed 30-word description for task 3 that elaborates on what needs to be done to complete this task successfully within the allotted timeframe",
		taskName: "Task 3",
		date: "2023-09-12T00:00:00.000Z",
		duration: {
			start: "09:30",
			end: "10:45",
		},
		promptOffset: 10,
		isCompleted: false,
	},
	{
		taskId: "b167d5a9-e7cd-4505-8692-3ffc922ac1ce",
		taskDescription:
			"Here is a 30-word description for task 4 that explains the specifics and requirements to fully understand what needs to be accomplished",
		taskName: "Task 4",
		date: "2023-09-13T00:00:00.000Z",
		duration: {
			start: "03:00",
			end: "04:15",
		},
		promptOffset: 20,
		isCompleted: false,
	},
	{
		taskId: "dba611a6-33da-4605-9ae6-97e081e9e19b",
		taskDescription:
			"This 30-word description for task 5 provides more context about what needs to be done to complete this task within the expected timeframe",
		taskName: "Task 5",
		date: "2023-09-14T00:00:00.000Z",
		duration: {
			start: "11:00",
			end: "12:00",
		},
		promptOffset: 25,
		isCompleted: false,
	},
	{
		taskId: "ed7fefb6-83a1-450a-b7d9-4013e9e5b663",
		taskDescription:
			"Here is a 30-word description for task 6 that explains what needs to be done in detail to fully complete this task according to the requirements",
		taskName: "Task 6",
		date: "2023-09-15T00:00:00.000Z",
		duration: {
			start: "11:30",
			end: "20:45",
		},
		promptOffset: 5,
		isCompleted: false,
	},
	{
		taskId: "8da60d9a-faeb-4150-a78f-72214c018a48",
		taskDescription:
			"This is a detailed 30-word description for task 7 that provides more context and details about what needs to be accomplished within the expected duration",
		taskName: "Task 7",
		date: "2023-09-16T00:00:00.000Z",
		duration: {
			start: "10:30",
			end: "11:45",
		},
		promptOffset: 18,
		isCompleted: false,
	},
	{
		taskId: "407009cd-ec67-466e-a2a1-fca08a8d35f9",
		taskDescription:
			"Here is a 30-word description for task 8 that explains what needs to be done to complete the task successfully according to the requirements and within the allotted timeframe",
		taskName: "Task 8",
		date: "2023-09-17T00:00:00.000Z",
		duration: {
			start: "14:30",
			end: "15:15",
		},
		promptOffset: 12,
		isCompleted: false,
	},
	{
		taskId: "407009cd-ec67-466e-a2a1-fca08m8d95f9",
		taskDescription:
			"This is a detailed 30-word description for task 9 that provides more context and elaborates on what specifically needs to be done to complete this task",
		taskName: "Task 9",
		date: "2023-09-18T00:00:00.000Z",
		duration: {
			start: "12:15",
			end: "13:00",
		},
		promptOffset: 22,
		isCompleted: false,
	},
	{
		taskId: "407009cd-ec67-466e-a2a1-fca08a8d95f9",
		taskDescription:
			"Here is a 30-word description for task 10 that explains what needs to be done to complete the task within the expected timeframe and according to the requirements",
		taskName: "Task 10",
		date: "2023-09-19T00:00:00.000Z",
		duration: {
			start: "18:00",
			end: "19:30",
		},
		promptOffset: 8,
		isCompleted: false,
	},
	{
		taskId: "11a253fb-efb3-4f1d-9fa0-68c27b28a79a",
		taskDescription:
			"This is a 30-word description for task 11 that should help provide more context and details about what this task entails and what needs to be done",
		taskName: "Task 11",
		date: "2023-09-20T00:00:00.000Z",
		duration: {
			start: "09:00",
			end: "10:30",
		},
		promptOffset: 15,
		isCompleted: false,
	},
	{
		taskId: "225c1830-1c7e-493b-92d3-03a8b1b29a68",
		taskDescription:
			"Here is a 30-word description for the twelfth task in this list that describes the details and requirements in a longer form",
		taskName: "Task 12",
		date: "2023-09-21T00:00:00.000Z",
		duration: {
			start: "14:00",
			end: "15:30",
		},
		promptOffset: 30,
		isCompleted: false,
	},
	{
		taskId: "e8dfcfa3-4715-42e1-9d88-d63c8d44cc4d",
		taskDescription:
			"This is a detailed 30-word description for task 13 that elaborates on what needs to be done to complete this task successfully within the allotted timeframe",
		taskName: "Task 13",
		date: "2023-09-22T00:00:00.000Z",
		duration: {
			start: "11:45",
			end: "12:30",
		},
		promptOffset: 10,
		isCompleted: false,
	},
	{
		taskId: "19a1e199-1a75-431f-848c-7db9a2f4c17c",
		taskDescription:
			"Here is a 30-word description for task 14 that explains the specifics and requirements to fully understand what needs to be accomplished",
		taskName: "Task 14",
		date: "2023-09-23T00:00:00.000Z",
		duration: {
			start: "08:30",
			end: "09:45",
		},
		promptOffset: 20,
		isCompleted: false,
	},
	{
		taskId: "8275e390-8d6e-41d0-951e-2d1f8d858d3e",
		taskDescription:
			"This 30-word description for task 15 provides more context about what needs to be done to complete this task within the expected timeframe",
		taskName: "Task 15",
		date: "2023-09-24T00:00:00.000Z",
		duration: {
			start: "16:00",
			end: "17:00",
		},
		promptOffset: 25,
		isCompleted: false,
	},
	{
		taskId: "a4a1f4e3-c052-4be2-8aa0-155968e97915",
		taskDescription:
			"Here is a 30-word description for task 16 that explains what needs to be done in detail to fully complete this task according to the requirements",
		taskName: "Task 16",
		date: "2023-09-25T00:00:00.000Z",
		duration: {
			start: "10:30",
			end: "19:45",
		},
		promptOffset: 5,
		isCompleted: false,
	},
	{
		taskId: "bf135e87-8720-498c-9272-16e6f3d80ccf",
		taskDescription:
			"This is a detailed 30-word description for task 17 that provides more context and details about what needs to be accomplished within the expected duration",
		taskName: "Task 17",
		date: "2023-09-26T00:00:00.000Z",
		duration: {
			start: "14:00",
			end: "14:45",
		},
		promptOffset: 18,
		isCompleted: false,
	},
	{
		taskId: "5b052a64-296e-4c33-bfbb-6970f98f5875",
		taskDescription:
			"Here is a 30-word description for task 18 that explains what needs to be done to complete the task successfully according to the requirements and within the allotted timeframe",
		taskName: "Task 18",
		date: "2023-09-27T00:00:00.000Z",
		duration: {
			start: "09:15",
			end: "10:00",
		},
		promptOffset: 12,
		isCompleted: false,
	},
	{
		taskId: "b87ad8ea-28f9-4cfd-a8f6-108e1442c72f",
		taskDescription:
			"This is a detailed 30-word description for task 19 that provides more context and elaborates on what specifically needs to be done to complete this task",
		taskName: "Task 19",
		date: "2023-09-28T00:00:00.000Z",
		duration: {
			start: "17:30",
			end: "18:15",
		},
		promptOffset: 22,
		isCompleted: false,
	},
	{
		taskId: "12d90a07-4e49-48e9-9294-1314c06d5801",
		taskDescription:
			"Here is a 30-word description for task 20 that explains what needs to be done to complete the task within the expected timeframe and according to the requirements",
		taskName: "Task 20",
		date: "2023-09-29T00:00:00.000Z",
		duration: {
			start: "13:00",
			end: "14:30",
		},
		promptOffset: 8,
		isCompleted: false,
	},
];

export default tasks;

export const taskMap: any = {};

// Iterate through the tasks array
tasks.forEach((task) => {
	// Use the task ID as the key and store the task object as the value
	taskMap[task.taskId] = task;
});

// console.log(taskMap);
