import { ButtonContainer, ButtonLabel } from './styles/Button.styledcomponent';
import ButtonProps from './types/ButtonProps';

export const Button = ({ variant, label }: ButtonProps) => {
	console.log('[Variant]: ', variant);
	return (
		<ButtonContainer variant={variant}>
			<ButtonLabel variant={variant}>{label}</ButtonLabel>
		</ButtonContainer>
	);
};
