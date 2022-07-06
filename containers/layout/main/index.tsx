import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Copy } from "./Copy";

interface layoutProps {
	children: ReactNode;
	title?: string;
	space?: boolean;
}

export const MainLayout: FC<layoutProps> = ({ children, title, space }) => (
	<>
		<Head>
			<title>{title ? title : "Audiophile"}</title>
		</Head>
		<Header />
		{children}
		<Copy space={space} />
		<Footer />
	</>
);
