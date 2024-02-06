import PageHeader from './components/PageHeader';
import { useSideBarContext } from './components/SideBar/context/SideBarContext';
import { GlobalContextProvider } from './context/GlobalContext';
import Board from './pages/Board';
import { BoardContextProvider } from './pages/Board/context/BoardContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const { isShown } = useSideBarContext();

	return (
		<BrowserRouter>
			<GlobalContextProvider>
				<PageHeader />
				<div style={{ marginLeft: isShown ? '30rem' : '0px', transition: 'all .3s' }}>
					<Routes>
						<Route path='/' element={<Home />} />

						<Route
							path='/board/:id'
							element={
								<BoardContextProvider>
									<Board />
								</BoardContextProvider>
							}
						/>

						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
				<GlobalStyle />
			</GlobalContextProvider>
		</BrowserRouter>
	);
}

export default App;
