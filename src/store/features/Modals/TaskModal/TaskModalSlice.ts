import { createSlice } from '@reduxjs/toolkit';
import TaskData from './types/TaskData.type';
import mapTaskAndSubTasks from '../../../Mappers/MapTaskAndSubTasks';

interface State {
	isOpenTaskModal: boolean;
	taskModalData: TaskData;
}

const initialState: State = {
	isOpenTaskModal: false,
	taskModalData: {} as TaskData,
};

const taskModalSlice = createSlice({
	name: 'taskModal',
	initialState,
	reducers: {
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

export const { openTaskModal, closeTaskModal, setTaskModalData } = taskModalSlice.actions;

export default taskModalSlice.reducer;
