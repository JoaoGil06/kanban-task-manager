import { ButtonContainer, ButtonLabel } from './styles/Button.styledcomponent';
import ButtonProps from './types/ButtonProps';

export const Button = ({ variant, label, onClick, type }: ButtonProps) => {
	return (
		<ButtonContainer variant={variant} onClick={onClick} type={type ?? 'button'}>
			<ButtonLabel variant={variant}>{label}</ButtonLabel>
		</ButtonContainer>
	);
};
