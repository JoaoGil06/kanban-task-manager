import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SideBarProvider } from './components/SideBar/context/SideBarContext.tsx';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apollo.ts';

if (import.meta.env.DEV) {
	const { worker } = await import('./mocks/browser.ts');
	await worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ApolloProvider client={client}>
		<SideBarProvider>
			<App />
		</SideBarProvider>
	</ApolloProvider>
);
