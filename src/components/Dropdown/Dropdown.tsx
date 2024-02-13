import { ChevronDown, DropdownButton, DropdownContainer, DropdownContent, DropdownItem } from './styles/Dropdown.styledcomponent';
import IconChevronDown from '../../assets/icon-chevron-down.svg';
import { useEffect, useState } from 'react';
import DropdownProps from './types/DropdownProp.type';
import { DropdownItem as DropdownItemType } from './types/DropdownItem.type';

export const Dropdown = ({ values, onChange, defaultValue }: DropdownProps) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<DropdownItemType | undefined>({} as DropdownItemType);

	useEffect(() => {
		if (defaultValue) {
			const findedDefaultValue = values.find((value) => value.value === defaultValue);
			if (findedDefaultValue) {
				setSelectedItem(findedDefaultValue);
			}
		}
	}, [defaultValue, values]);

	const onClickDropdownItem = (item: DropdownItemType) => {
		onChange(item);
		setSelectedItem(item);
		setIsOpened(false);
	};

	return (
		<DropdownContainer>
			<DropdownButton onClick={() => setIsOpened(!isOpened)} isActive={isOpened}>
				{selectedItem?.label ? selectedItem.label : 'Select'} <ChevronDown src={IconChevronDown} />
			</DropdownButton>
			{isOpened && (
				<DropdownContent>
					{values.map((value) => (
						<DropdownItem key={value.value} onClick={() => onClickDropdownItem({ value: value.value, label: value.label })}>
							{value.label}
						</DropdownItem>
					))}
				</DropdownContent>
			)}
		</DropdownContainer>
	);
};
