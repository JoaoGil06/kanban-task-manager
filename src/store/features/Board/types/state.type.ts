import Board from '../../../../types/Board.type';
import Column from '../../../../types/Column.type';
import BoardData from './BoardData.type';

interface State extends Board {
	isLoading: boolean;
	columns: Column[];
	data: BoardData[];
}

export default State;
