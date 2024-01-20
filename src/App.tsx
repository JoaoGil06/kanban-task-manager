import PageHeader from './components/PageHeader';
import { useSideBarContext } from './components/SideBar/context/SideBarContext';
import Board from './pages/Board';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const { isShown } = useSideBarContext();

	return (
		<BrowserRouter>
			<PageHeader />

			<div style={{ marginLeft: isShown ? '300px' : '0px', transition: 'all .3s' }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/board/:id' element={<Board />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<GlobalStyle />
		</BrowserRouter>
	);
}

export default App;
