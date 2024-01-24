import { useState, useCallback } from 'react';

const useModal = (initialIsOpen = false) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

	const openModal = useCallback((): void => {
		setIsOpen(true);
	}, []);

	const closeModal = useCallback((): void => {
		setIsOpen(false);
	}, []);

	return { isOpen, openModal, closeModal };
};

export default useModal;
