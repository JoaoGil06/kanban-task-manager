import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/Sidebar/SidebarSlice';
import boardReducer from './features/Board/BoardSlice';
import deleteModalReducer from './features/Modals/DeleteBoardModal/DeleteBoardModalSlice';
import newBoardModalReducer from './features/Modals/NewBoardModal/NewBoardModalSlice';
import newColumnModalReducer from './features/Modals/NewColumnModal/NewColumnModalSlice';
import newTaskModalReducer from './features/Modals/NewTaskModal/NewTaskModalSlice';
import taskModalReducer from './features/Modals/TaskModal/TaskModalSlice';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		board: boardReducer,
		deleteModal: deleteModalReducer,
		newBoardModal: newBoardModalReducer,
		newColumnModal: newColumnModalReducer,
		newTaskModal: newTaskModalReducer,
		taskModal: taskModalReducer,
	},
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
