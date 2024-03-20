import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apollo.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

if (import.meta.env.DEV) {
	const { worker } = await import('./mocks/browser.ts');
	await worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>
);
