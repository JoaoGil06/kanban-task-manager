import { ButtonContainer, ButtonLabel } from './styles/Button.styledcomponent';
import ButtonProps from './types/ButtonProps';

export const Button = ({ variant, label, onClick }: ButtonProps) => {
	return (
		<ButtonContainer variant={variant} onClick={onClick}>
			<ButtonLabel variant={variant}>{label}</ButtonLabel>
		</ButtonContainer>
	);
};
