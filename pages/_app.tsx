import "../styles/globals.css";
import type { AppPropsWithLayout } from "../types/next";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { Client } from "src/apollo";
import { theme } from "../styled.config";
import { Provider } from "react-redux";
import { store } from "store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<Provider store={store}>
			<ApolloProvider client={Client}>
				<ThemeProvider theme={theme}>
					{getLayout(<Component {...pageProps} />, pageProps)}
				</ThemeProvider>
			</ApolloProvider>
		</Provider>
	);
}

export default MyApp;
