import { useState } from 'react';
import { useAppSelector } from '../../../../../store/store';
import { useMutation } from '@apollo/client';
import { CREATE_COLUMN } from '../../../../../graphql/mutations/columns';

interface UseNewColumnModalProps {
	onClose: () => void;
	onClick: () => void;
}

const useNewColumnModal = ({ onClick, onClose }: UseNewColumnModalProps) => {
	const [columnName, setColumnName] = useState<string>('');
	const { id } = useAppSelector((state) => state.board);

	const [createColumn] = useMutation(CREATE_COLUMN, {
		variables: {
			board_id: id,
			title: columnName,
		},
	});

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();

		const value = e.target.value;
		setColumnName(value);
	};

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		await createColumn();
		onClick();
		onClose();
		setColumnName('');
	};

	return {
		columnName,
		handleOnChange,
		handleSubmit,
	};
};

export default useNewColumnModal;
