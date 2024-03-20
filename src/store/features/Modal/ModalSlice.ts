import { createSlice } from '@reduxjs/toolkit';
import TaskData from './types/TaskData.type';
import mapTaskAndSubTasks from '../../Mappers/MapTaskAndSubTasks';

interface State {
	isOpenNewBoardModal: boolean;
	isOpenAddNewTaskModal: boolean;
	isOpenDeleteBoardModal: boolean;
	isOpenAddNewColumnModal: boolean;
	isOpenTaskModal: boolean;
	taskModalData: TaskData;
}

const initialState: State = {
	isOpenNewBoardModal: false,
	isOpenAddNewTaskModal: false,
	isOpenDeleteBoardModal: false,
	isOpenAddNewColumnModal: false,
	isOpenTaskModal: false,
	taskModalData: {} as TaskData,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openNewBoardModal: (state: State) => {
			state.isOpenNewBoardModal = true;
		},
		closeNewBoardModal: (state: State) => {
			state.isOpenNewBoardModal = false;
		},
		openAddNewTaskModal: (state: State) => {
			state.isOpenAddNewTaskModal = true;
		},
		closeAddNewTaskModal: (state: State) => {
			state.isOpenAddNewTaskModal = false;
		},
		openDeleteBoardModal: (state: State) => {
			state.isOpenDeleteBoardModal = true;
		},
		closeDeleteBoardModal: (state: State) => {
			state.isOpenDeleteBoardModal = false;
		},
		openAddNewColumnModal: (state: State) => {
			state.isOpenAddNewColumnModal = true;
		},
		closeAddNewColumnModal: (state: State) => {
			state.isOpenAddNewColumnModal = false;
		},
		openTaskModal: (state: State) => {
			state.isOpenTaskModal = true;
		},
		closeTaskModal: (state: State) => {
			state.isOpenTaskModal = false;
		},
		setTaskModalData: (state: State, action) => {
			console.log('[Entrou aqui]');
			const { task, subtasks } = action.payload;
			console.log('[Task]: ', task);
			console.log('[SubTasks]: ', subtasks);
			const data = mapTaskAndSubTasks(task, subtasks);
			console.log('[setTaskModalData]: ', setTaskModalData);
			state.taskModalData = data;
		},
	},
});

export const {
	openNewBoardModal,
	closeNewBoardModal,
	openAddNewTaskModal,
	closeAddNewTaskModal,
	openDeleteBoardModal,
	closeDeleteBoardModal,
	openAddNewColumnModal,
	closeAddNewColumnModal,
	openTaskModal,
	closeTaskModal,
	setTaskModalData,
} = modalSlice.actions;

export default modalSlice.reducer;
