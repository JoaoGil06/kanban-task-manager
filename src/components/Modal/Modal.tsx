import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay } from './styles/Modal.styledcomponent';
import { ModalProps } from './types/ModalProps.type';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	return (
		isOpen &&
		createPortal(
			<>
				<ModalOverlay onClick={onClose} />
				<ModalContainer>{children}</ModalContainer>
			</>,
			document.body
		)
	);
};
