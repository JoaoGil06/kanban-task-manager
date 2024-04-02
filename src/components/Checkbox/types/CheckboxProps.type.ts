import { CheckboxItem } from './CheckboxItem.type';

export type onChangeCheckboxValue = {
	value: string;
	isChecked: boolean;
};

export default interface CheckboxProps {
	checkboxItem: CheckboxItem;
	isChecked: boolean;
	onChange: ({ value, isChecked }: onChangeCheckboxValue) => void;
}
