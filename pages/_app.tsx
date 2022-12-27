import "../styles/globals.css";
import type { AppPropsWithLayout } from "../types/next";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { Client } from "src/apollo";
import { theme } from "../styled.config";
import { Provider } from "react-redux";
import { store } from "store";
import { Toaster } from "react-hot-toast";
import { Confirm } from "notiflix";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page) => page);

	Confirm.init({
		className: "confirm-modal",
		borderRadius: "8px",
		fontFamily: "Manrope",
		titleColor: "#D87D4A",
		okButtonBackground: "#D87D4A",
	});

	return (
		<Provider store={store}>
			<ApolloProvider client={Client}>
				<ThemeProvider theme={theme}>
					<Toaster />
					{getLayout(<Component {...pageProps} />, pageProps)}
				</ThemeProvider>
			</ApolloProvider>
		</Provider>
	);
}

export default MyApp;
