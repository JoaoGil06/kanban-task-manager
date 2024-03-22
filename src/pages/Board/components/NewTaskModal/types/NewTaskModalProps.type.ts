import BoardData from '../../../types/BoardData.type';

export default interface NewTaskModalProps {
	isOpen: boolean;
	onClose: () => void;
	onClick: () => void;
	columns: BoardData[];
}
