import Layout from './components/Layout';
import Board from './pages/Board';
import { BoardContextProvider } from './pages/Board/context/BoardContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path='/board/:id'
						element={
							<BoardContextProvider>
								<Board />
							</BoardContextProvider>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
			<GlobalStyle />
		</BrowserRouter>
	);
}

export default App;
