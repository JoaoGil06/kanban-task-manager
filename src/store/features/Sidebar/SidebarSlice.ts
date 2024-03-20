import { createSlice } from '@reduxjs/toolkit';

interface State {
	isOpenSidebar: boolean;
}

const initialState: State = {
	isOpenSidebar: false,
};

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		openSidebar: (state: State) => {
			state.isOpenSidebar = true;
		},
		closeSidebar: (state: State) => {
			state.isOpenSidebar = false;
		},
	},
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
