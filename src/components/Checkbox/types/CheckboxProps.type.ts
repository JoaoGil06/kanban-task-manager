import { CheckboxItem } from './CheckboxItem.type';

type onChangeValue = {
	value: string;
	isChecked: boolean;
};

export default interface CheckboxProps {
	checkboxItem: CheckboxItem;
	isChecked: boolean;
	onChange: ({ value, isChecked }: onChangeValue) => void;
}
