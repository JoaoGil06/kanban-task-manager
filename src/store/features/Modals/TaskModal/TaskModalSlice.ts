import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import mapTaskAndSubTasks from '../../../Mappers/MapTaskAndSubTasks';
import { setTaskModalDataAction, toggleSubtaskAction } from './types/actions.type';
import State, { TaskData } from './types/state.type';
import Subtask from '../../../../types/Subtask.type';

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
			console.log('[Task]: ', task);
			// const data = mapTaskAndSubTasks(task, subtasks);
			state.taskModalData = task;
		},
		toggleSubtask: (state: State, action: PayloadAction<toggleSubtaskAction>) => {
			const { isChecked, value } = action.payload;
			state.taskModalData.subtasks.reduce((acc, currentValue) => {
				if (currentValue.id === value) {
					currentValue.completed = isChecked;
				}

				acc.push(currentValue);

				return acc;
			}, [] as Subtask[]);
		},
		changeColumn: (state: State, action: PayloadAction<string>) => {
			state.taskModalData.column_id = action.payload;
		},
	},
});

export const { openTaskModal, closeTaskModal, setTaskModalData, toggleSubtask, changeColumn } = taskModalSlice.actions;

export default taskModalSlice.reducer;
