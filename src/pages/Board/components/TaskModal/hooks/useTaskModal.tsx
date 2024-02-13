import { useCallback, useMemo, useState } from 'react';

interface UseTaskModalProps {
	onClose: () => void;
}

export const useTaskModal = ({ onClose }: UseTaskModalProps) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleClickEditButton = useCallback(() => setIsEditing(!isEditing), [isEditing]);

	const handleOnClose = () => {
		setIsEditing(false);
		onClose();
	};

	const actions = useMemo(
		() => [
			{
				label: 'Edit Task',
				onClick: handleClickEditButton,
			},
			{
				label: 'Delete Task',
				onClick: () => {},
			},
		],
		[handleClickEditButton]
	);

	return {
		isEditing,
		handleOnClose,
		actions,
	};
};
