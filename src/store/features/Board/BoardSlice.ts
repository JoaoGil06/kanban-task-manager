import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import State from './types/state.type';
import BoardActions from './types/actions.type';
import mapTasksAndColumns from '../../Mappers/MapTasksAndColumns';

const initialState: State = {
	id: '',
	title: '',
	columns: [],
	data: [],
	isLoading: true,
};

const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setBoard: (state: State, action: PayloadAction<BoardActions>) => {
			const { id, title, isLoading } = action.payload;
			state.id = id;
			state.title = title;
			state.isLoading = isLoading;
		},
		setColumns: (state, action) => {
			state.columns = action.payload;
		},
		setBoardData: (state: State, action) => {
			const { columns, tasks } = action.payload;
			const data = mapTasksAndColumns(columns, tasks);

			state.data = data;
		},
	},
});

export const { setBoard, setBoardData, setColumns } = boardSlice.actions;

export default boardSlice.reducer;
