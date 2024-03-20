import { Outlet } from 'react-router-dom';
import PageHeader from '../PageHeader';
import SideBar from '../SideBar';
import { useAppSelector } from '../../store/store';

export const Layout = () => {
	const { isOpenSidebar } = useAppSelector((state) => state.sidebar);

	return (
		<>
			<PageHeader />
			<SideBar />
			<main style={{ marginLeft: isOpenSidebar ? '30rem' : '0px', transition: 'all .3s' }}>
				<Outlet />
			</main>
		</>
	);
};
