import Button from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import Modal from '../../../../components/Modal';
import { ActionsContainer, ModalBody, ModalContainer, ModalTitle } from './styles/DeleteBoardModal.styledcomponent';
import DeleteBoardModalProps from './types/DeleteBoardModalProps.type';

export const DeleteBoardModal = ({ boardTitle, isOpen, onClose }: DeleteBoardModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContainer>
				<ModalTitle>Delete this board?</ModalTitle>
				<ModalBody>Are you sure you want to delete the {boardTitle}? This action, will remove all columns and tasks and cannot be reversed.</ModalBody>
				<ActionsContainer>
					<Button label='Cancel' variant={ButtonVariant.Secondary} onClick={onClose} />
					<Button label='Delete' variant={ButtonVariant.Destructive} />
				</ActionsContainer>
			</ModalContainer>
		</Modal>
	);
};
