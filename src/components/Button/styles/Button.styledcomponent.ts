import styled from 'styled-components';
import { ButtonVariant } from '../types/ButtonVariant.enum';

type ButtonProps = {
	variant: ButtonVariant;
};

export const ButtonContainer = styled.button<ButtonProps>`
	min-width: 25rem;
	height: 4rem;
	margin: 0 auto;
	border-radius: 20px;
	border: none;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;

	background: ${(props) => {
		switch (props.variant) {
			case ButtonVariant.Primary:
				return 'var(--slateBlue)';
			case ButtonVariant.Secondary:
				return 'rgba(99, 95, 199, 0.1)';
			case ButtonVariant.Destructive:
				return 'var(--fireOpal)';
			default:
				return 'var(--richBlack)';
		}
	}};

	&:hover {
		background: ${(props) => {
			switch (props.variant) {
				case ButtonVariant.Primary:
					return 'var(--maximumBluePurple)';
				case ButtonVariant.Secondary:
					return 'rgba(99, 95, 199, 0.25)';

				case ButtonVariant.Destructive:
					return 'var(--americanPink)';
				default:
					return 'var(--richBlack)';
			}
		}};
	}

	transition: all 0.2s;
`;

type ButtonLabelProps = {
	variant: ButtonVariant;
};

export const ButtonLabel = styled.span<ButtonLabelProps>`
	color: ${(props) => (props.variant === ButtonVariant.Secondary ? 'var(--slateBlue)' : 'var(--white)')};
	font-size: 1.3rem;
	font-weight: 700;
	line-height: 23px;
`;
