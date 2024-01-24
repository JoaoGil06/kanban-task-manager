import React from 'react';

export default interface InputProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	hasErrors?: boolean;
	errorMessage?: string;
	placeholder?: string;
}
