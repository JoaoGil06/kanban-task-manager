import styled from 'styled-components';

export const CheckboxContainer = styled.div`
	width: 35rem;
	height: 4rem;
	background-color: var(--aliceBlue);
	padding: 1.2rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s;
	border-radius: 0.4rem;

	&:hover {
		background-color: var(--maximumBluePurple);
	}

	input[type='checkbox'] {
		accent-color: var(--slateBlue);
	}
`;

type CheckboxLabelProps = {
	isChecked: boolean;
};

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
	font-size: 1.2rem;
	margin-left: 1.6rem;
	line-height: normal;
	font-weight: 700;
	color: var(--richBlack);
	text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
	opacity: ${(props) => (props.isChecked ? 0.5 : 1)};
`;
