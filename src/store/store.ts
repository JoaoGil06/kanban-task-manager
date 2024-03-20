import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './features/Board/BoardSlice';
import modalReducer from './features/Modal/ModalSlice';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		board: boardReducer,
		modal: modalReducer,
	},
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
