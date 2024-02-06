import { useState } from 'react';
import Button from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import { ColumnFormRow, ColumnsLabel, DeleteIcon, Form, ModalContainer, ModalTitle } from './styles/NewBoardModal.styledcomponent';
import NewBoardModalProps from './types/NewBoardModalProps.type';
import { v4 as uuidv4 } from 'uuid';
import IconCross from '../../../../assets/icon-cross.svg';
import NewBoardModalForm from './types/NewBoardModalForm.type';

export const NewBoardModal = ({ isOpen, onClose }: NewBoardModalProps) => {
	const column = { id: uuidv4(), value: '' };

	const [formData, setFormData] = useState<NewBoardModalForm>({
		name: '',
		columns: [column],
	});

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		console.log('Criar o Hook de criação e usar aqui');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id?: string): void => {
		e.preventDefault();
		const { name, value } = e.target;

		// Se um ID for fornecido, é uma alteração de coluna
		if (id) {
			const newColumns = formData.columns.map((column) => (column.id === id ? { ...column, value } : column));
			setFormData({ ...formData, columns: newColumns });
		} else {
			// Caso contrário, é uma alteração no nome
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleAddNewColumn = (): void => {
		setFormData({ ...formData, columns: [...formData.columns, column] });
	};

	const handleDeleteColumn = (id: string) => {
		const filteredColumns = formData.columns.filter((column) => column.id !== id);

		setFormData({ ...formData, columns: filteredColumns });
	};

	const handleOnClose = (): void => {
		setFormData({ name: '', columns: [column] });
		onClose();
	};

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
							<ColumnFormRow>
								<Input onChange={(e) => handleChange(e, column.id)} name={`column-${column.id}`} value={column.value} type='text' placeholder='Insert column name' />
								{formData.columns.length > 1 && <DeleteIcon src={IconCross} onClick={() => handleDeleteColumn(column.id)} />}
							</ColumnFormRow>
						))}
					</div>
					<Button variant={ButtonVariant.Secondary} label='+Add new column' onClick={handleAddNewColumn} />
					<Button variant={ButtonVariant.Primary} label='Create New Board' />
				</Form>
			</ModalContainer>
		</Modal>
	);
};
