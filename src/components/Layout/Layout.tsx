import { Outlet } from 'react-router-dom';
import PageHeader from '../PageHeader';
import SideBar from '../SideBar';
import { useSideBarContext } from '../SideBar/context/SideBarContext';

export const Layout = () => {
	const { isShown } = useSideBarContext();

	return (
		<>
			<PageHeader />
			<SideBar />
			<main style={{ marginLeft: isShown ? '30rem' : '0px', transition: 'all .3s' }}>
				<Outlet />
			</main>
		</>
	);
};
