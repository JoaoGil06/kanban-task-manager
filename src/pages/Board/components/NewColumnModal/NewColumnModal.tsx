import React from 'react';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';

const NewColumnModal = ({ isOpen, onClose }: any) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const value = e.target.value;
		console.log('[Value]: ', value);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form>
				<Input onChange={handleOnChange} />
			</form>
		</Modal>
	);
};

export default NewColumnModal;
