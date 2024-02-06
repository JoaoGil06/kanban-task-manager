import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SideBarProvider } from './components/SideBar/context/SideBarContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<SideBarProvider>
		<App />
	</SideBarProvider>
);
