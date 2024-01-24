import { useState } from 'react';
import CheckboxProps from './types/CheckboxProps.type';
import { CheckboxContainer, CheckboxLabel } from './styles/Checkbox.styledcomponent';

export const Checkbox = ({ isChecked, checkboxItem, onChange }: CheckboxProps) => {
	const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(isChecked);

	const handleOnChange = (value: string) => {
		setIsCheckboxChecked(!isCheckboxChecked);
		onChange({ value, isChecked: !isCheckboxChecked });
	};

	return (
		<CheckboxContainer onClick={() => handleOnChange(checkboxItem.value)}>
			<input type='checkbox' id={checkboxItem.value} value={checkboxItem.value} checked={isChecked} />
			<CheckboxLabel htmlFor={checkboxItem.value} isChecked={isCheckboxChecked}>
				{checkboxItem.label}
			</CheckboxLabel>
		</CheckboxContainer>
	);
};
