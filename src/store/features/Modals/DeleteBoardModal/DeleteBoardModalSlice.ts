import { createSlice } from '@reduxjs/toolkit';

interface State {
	isOpenDeleteBoardModal: boolean;
}

const initialState: State = {
	isOpenDeleteBoardModal: false,
};

const deleteBoardModalSlice = createSlice({
	name: 'deleteBoardModal',
	initialState,
	reducers: {
		openDeleteBoardModal: (state: State) => {
			state.isOpenDeleteBoardModal = true;
		},
		closeDeleteBoardModal: (state: State) => {
			state.isOpenDeleteBoardModal = false;
		},
	},
});

export const { openDeleteBoardModal, closeDeleteBoardModal } = deleteBoardModalSlice.actions;

export default deleteBoardModalSlice.reducer;
