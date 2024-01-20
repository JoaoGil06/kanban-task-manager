import { ErrorMessageComponent, InputComponent, InputContainer } from './styles/Input.styledcomponent';
import InputProps from './types/InputProps.type';

export const Input = ({ placeholder, errorMessage, hasErrors }: InputProps) => {
	return (
		<InputContainer>
			<InputComponent type='text' placeholder={placeholder} hasErrors={hasErrors ?? false} />
			{hasErrors && <ErrorMessageComponent>{errorMessage}</ErrorMessageComponent>}
		</InputContainer>
	);
};
