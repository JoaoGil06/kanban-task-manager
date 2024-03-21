import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import State from './types/state.type';
import mapTasksAndColumns from '../../Mappers/MapTasksAndColumns';
import Column from '../../../types/Column.type';
import { setBoardAction, setBoardDataAction } from './types/actions.type';
import { DropResult } from 'react-beautiful-dnd';

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
		setBoard: (state: State, action: PayloadAction<setBoardAction>) => {
			const { id, title, isLoading } = action.payload;
			state.id = id;
			state.title = title;
			state.isLoading = isLoading;
		},
		setColumns: (state: State, action: PayloadAction<Column[]>) => {
			state.columns = action.payload;
		},
		setBoardData: (state: State, action: PayloadAction<setBoardDataAction>) => {
			const { columns, tasks } = action.payload;
			const data = mapTasksAndColumns(columns, tasks);

			state.data = data;
		},
		onDragTask: (state: State, action: PayloadAction<DropResult>) => {
			const { source, destination } = action.payload;

			if (!destination) return;

			if (source.droppableId === destination.droppableId && source.index === destination.index) return;

			const sourceColumnIndex = +source.droppableId.split('-')[1];
			const sourceItemIndex = source.index;
			const destinationColumnIndex = +destination.droppableId.split('-')[1];
			const destinationItemIndex = destination.index;

			const newBoardData = [...state.data];

			const sourceColumnData = newBoardData[sourceColumnIndex];
			const destinationColumnData = newBoardData[destinationColumnIndex];

			const [removedTask] = sourceColumnData.tasks.splice(sourceItemIndex, 1);
			destinationColumnData.tasks.splice(destinationItemIndex, 0, removedTask);

			newBoardData[sourceColumnIndex].tasks = sourceColumnData.tasks;
			newBoardData[destinationColumnIndex].tasks = destinationColumnData.tasks;

			state.data = newBoardData;
		},
	},
});

export const { setBoard, setBoardData, setColumns, onDragTask } = boardSlice.actions;

export default boardSlice.reducer;
