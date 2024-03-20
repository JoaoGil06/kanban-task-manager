import { createSlice } from '@reduxjs/toolkit';

interface State {
	isOpenNewBoardModal: boolean;
}

const initialState: State = {
	isOpenNewBoardModal: false,
};

const newBoardModalSlice = createSlice({
	name: 'newBoardModal',
	initialState,
	reducers: {
		openNewBoardModal: (state: State) => {
			state.isOpenNewBoardModal = true;
		},
		closeNewBoardModal: (state: State) => {
			state.isOpenNewBoardModal = false;
		},
	},
});

export const { openNewBoardModal, closeNewBoardModal } = newBoardModalSlice.actions;

export default newBoardModalSlice.reducer;
