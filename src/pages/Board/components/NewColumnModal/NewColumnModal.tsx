import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import { ModalTitle, Form, ModalContainer } from './styles/NewColumnModal.styledcomponent';
import NewColumnModalProps from './types/NewColumnModalProps.type';
import useNewColumnModal from './hooks/useNewColumnModal';

const NewColumnModal = ({ isOpen, onClose, onClick }: NewColumnModalProps) => {
	const { columnName, handleOnChange, handleSubmit } = useNewColumnModal({ onClose, onClick });

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContainer>
				<ModalTitle>Add New Column</ModalTitle>
				<Form onSubmit={handleSubmit}>
					<Input onChange={handleOnChange} name='Name' value={columnName} type='text' placeholder='Insere column name' />
					<Button variant={ButtonVariant.Primary} label='Add Column' />
				</Form>
			</ModalContainer>
		</Modal>
	);
};

export default NewColumnModal;
