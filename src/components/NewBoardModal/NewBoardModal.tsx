import { ColumnFormRow, ColumnsLabel, DeleteIcon, Form, ModalContainer, ModalTitle } from './styles/NewBoardModal.styledcomponent';
import NewBoardModalProps from './types/NewBoardModalProps.type';
import IconCross from '../../assets/icon-cross.svg';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import { ButtonVariant } from '../Button/types/ButtonVariant.enum';
import useNewBoardModal from './hooks/useNewBoardModal';

export const NewBoardModal = ({ isOpen, onClose, onClick }: NewBoardModalProps) => {
	const { formData, handleAddNewColumn, handleChange, handleDeleteColumn, handleOnClose, handleSubmit } = useNewBoardModal({ onClick, onClose });

	return (
		<Modal isOpen={isOpen} onClose={handleOnClose}>
			<ModalContainer>
				<ModalTitle>Add New Board</ModalTitle>
				<Form onSubmit={handleSubmit}>
					<>
						<Input onChange={handleChange} name='name' value={formData['name']} type='text' placeholder='Insert board name' showLabel />
					</>
					<div>
						<ColumnsLabel>Columns</ColumnsLabel>
						{formData.columns.map((column) => (
							<ColumnFormRow key={column.id}>
								<Input onChange={(e) => handleChange(e, column.id)} name={`column-${column.id}`} value={column.value} type='text' placeholder='Insert column name' />
								{formData.columns.length > 1 && <DeleteIcon src={IconCross} onClick={() => handleDeleteColumn(column.id)} />}
							</ColumnFormRow>
						))}
					</div>
					<Button variant={ButtonVariant.Secondary} label='+Add new column' onClick={handleAddNewColumn} />
					<Button variant={ButtonVariant.Primary} label='Create New Board' type='submit' />
				</Form>
			</ModalContainer>
		</Modal>
	);
};
