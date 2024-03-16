export default interface DeleteBoardModalProps {
	isOpen: boolean;
	onClose: () => void;
	onClick: () => void;
	boardTitle: string;
}
