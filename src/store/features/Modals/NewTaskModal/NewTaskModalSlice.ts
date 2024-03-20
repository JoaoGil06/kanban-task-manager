import { createSlice } from '@reduxjs/toolkit';

interface State {
	isOpenAddNewTaskModal: boolean;
}

const initialState: State = {
	isOpenAddNewTaskModal: false,
};

const newTaskModalSlice = createSlice({
	name: 'newTaskModal',
	initialState,
	reducers: {
		openAddNewTaskModal: (state: State) => {
			state.isOpenAddNewTaskModal = true;
		},
		closeAddNewTaskModal: (state: State) => {
			state.isOpenAddNewTaskModal = false;
		},
	},
});

export const { openAddNewTaskModal, closeAddNewTaskModal } = newTaskModalSlice.actions;

export default newTaskModalSlice.reducer;
