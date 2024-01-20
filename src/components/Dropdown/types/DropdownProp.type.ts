import { DropdownItem } from './DropdownItem.type';

export default interface DropdownProps {
	values: DropdownItem[];
	onChange: (item: DropdownItem) => void;
	defaultValue?: DropdownItem;
}
