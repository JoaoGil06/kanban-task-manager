import { ErrorMessageComponent, InputComponent, InputContainer, InputLabel } from './styles/Input.styledcomponent';
import InputProps from './types/InputProps.type';

export const Input = ({ onChange, placeholder, errorMessage, hasErrors, name, value, type = 'text', showLabel }: InputProps) => {
	return (
		<InputContainer>
			{showLabel && <InputLabel htmlFor={name}>{name}</InputLabel>}
			<InputComponent type={type} placeholder={placeholder} hasErrors={hasErrors ?? false} onChange={onChange} name={name} value={value} />
			{hasErrors && <ErrorMessageComponent>{errorMessage}</ErrorMessageComponent>}
		</InputContainer>
	);
};
