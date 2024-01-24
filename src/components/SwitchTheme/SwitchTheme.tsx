import { useState } from 'react';
import DarkThemeIcon from '../../assets/icon-dark-theme.svg';
import LightThemeIcon from '../../assets/icon-light-theme.svg';
import { Container, IconDark, IconLight, SwitchContainer } from './styles/SwitchTheme.styledcomponent';

export const SwitchTheme = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleIsActive = () => {
		setIsActive(!isActive);
	};

	return (
		<Container>
			<IconLight src={LightThemeIcon} alt='Light' />
			<SwitchContainer onClick={toggleIsActive} isActive={isActive} />
			<IconDark src={DarkThemeIcon} alt='Dark' />
		</Container>
	);
};
