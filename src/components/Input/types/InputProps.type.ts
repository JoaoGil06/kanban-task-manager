import React from 'react';

export default interface InputProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	value: string | number;
	type: string;
	hasErrors?: boolean;
	errorMessage?: string;
	placeholder?: string;
	showLabel?: boolean;
}
