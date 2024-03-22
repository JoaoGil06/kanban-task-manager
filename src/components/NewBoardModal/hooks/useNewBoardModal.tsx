import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewBoardModalForm from '../types/NewBoardModalForm.type';
import { useMutation } from '@apollo/client';
import { CREATE_COLUMN } from '../../../graphql/mutations/columns';
import { CREATE_BOARD } from '../../../graphql/mutations/boards';

interface UseNewBoardModalProps {
	onClose: () => void;
	onClick: () => void;
}

const useNewBoardModal = ({ onClose, onClick }: UseNewBoardModalProps) => {
	const column = { id: uuidv4(), value: '' };

	const [formData, setFormData] = useState<NewBoardModalForm>({
		name: '',
		columns: [column],
	});

	const [createColumn] = useMutation(CREATE_COLUMN);

	const [createBoard] = useMutation(CREATE_BOARD, {
		variables: {
			title: formData.name,
		},
		onCompleted: (data) => {
			formData.columns.map((column) => {
				createColumn({
					variables: {
						board_id: data.id,
						title: column.value,
					},
				});
			});
		},
	});

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();

		await createBoard();
		onClick();
		onClose();
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

	return {
		formData,
		handleSubmit,
		handleChange,
		handleAddNewColumn,
		handleDeleteColumn,
		handleOnClose,
	};
};

export default useNewBoardModal;
