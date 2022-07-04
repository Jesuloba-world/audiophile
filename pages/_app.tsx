import "../styles/globals.css";
import type { AppPropsWithLayout } from "../types/next";
import { ThemeProvider } from "styled-components";
import { theme } from "../styled.config";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<ThemeProvider theme={theme}>
			{getLayout(<Component {...pageProps} />, pageProps)}
		</ThemeProvider>
	);
}

export default MyApp;
