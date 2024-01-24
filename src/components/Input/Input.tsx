import { ErrorMessageComponent, InputComponent, InputContainer } from './styles/Input.styledcomponent';
import InputProps from './types/InputProps.type';

export const Input = ({ onChange, placeholder, errorMessage, hasErrors }: InputProps) => {
	return (
		<InputContainer>
			<InputComponent type='text' placeholder={placeholder} hasErrors={hasErrors ?? false} onChange={onChange} />
			{hasErrors && <ErrorMessageComponent>{errorMessage}</ErrorMessageComponent>}
		</InputContainer>
	);
};
