import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import mapTaskAndSubTasks from '../../../Mappers/MapTaskAndSubTasks';
import { setTaskModalDataAction } from './types/actions.type';
import State, { TaskData } from './types/state.type';

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
		setTaskModalData: (state: State, action: PayloadAction<setTaskModalDataAction>) => {
			const { task, subtasks } = action.payload;
			const data = mapTaskAndSubTasks(task, subtasks);
			state.taskModalData = data;
		},
	},
});

export const { openTaskModal, closeTaskModal, setTaskModalData } = taskModalSlice.actions;

export default taskModalSlice.reducer;
