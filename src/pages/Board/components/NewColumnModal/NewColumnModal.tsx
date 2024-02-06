import React, { useState } from 'react';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import { ModalTitle, Form, ModalContainer } from './styles/NewColumnModal.styledcomponent';
import NewColumnModalProps from './types/NewColumnModalProps.type';

const NewColumnModal = ({ isOpen, onClose }: NewColumnModalProps) => {
	const [columnName, setColumnName] = useState<string>('');

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();

		const value = e.target.value;
		setColumnName(value);
	};

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		setColumnName('');
		console.log('Criar o Hook de criação e usar aqui');
		console.log('nome da coluna: ', columnName);
	};

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
