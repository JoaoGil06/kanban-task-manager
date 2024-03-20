import { createSlice } from '@reduxjs/toolkit';

interface State {
	isOpenAddNewColumnModal: boolean;
}

const initialState: State = {
	isOpenAddNewColumnModal: false,
};

const newColumnModalSlice = createSlice({
	name: 'newColumnModal',
	initialState,
	reducers: {
		openAddNewColumnModal: (state: State) => {
			state.isOpenAddNewColumnModal = true;
		},
		closeAddNewColumnModal: (state: State) => {
			state.isOpenAddNewColumnModal = false;
		},
	},
});

export const { openAddNewColumnModal, closeAddNewColumnModal } = newColumnModalSlice.actions;

export default newColumnModalSlice.reducer;
