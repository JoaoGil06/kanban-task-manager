export default interface TaskModalProps {
	isOpen: boolean;
	onClose: () => void;
	refetchColumns: () => unknown;
}
