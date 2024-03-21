import { Outlet } from 'react-router-dom';
import PageHeader from '../PageHeader';
import SideBar from '../SideBar';
import { useAppDispatch, useAppSelector } from '../../store/store';
import NewBoardModal from '../NewBoardModal';
import { closeNewBoardModal } from '../../store/features/Modals/NewBoardModal/NewBoardModalSlice';

export const Layout = () => {
	const dispatch = useAppDispatch();
	const { isOpenSidebar } = useAppSelector((state) => state.sidebar);
	const { isOpenNewBoardModal } = useAppSelector((state) => state.newBoardModal);

	const onCloseAddNewBoardModal = () => {
		dispatch(closeNewBoardModal());
	};

	return (
		<>
			<PageHeader />
			<SideBar />
			<main style={{ marginLeft: isOpenSidebar ? '30rem' : '0px', transition: 'all .3s' }}>
				<Outlet />
				<NewBoardModal isOpen={isOpenNewBoardModal} onClose={onCloseAddNewBoardModal} />
			</main>
		</>
	);
};
