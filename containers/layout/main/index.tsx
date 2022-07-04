import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";

interface layoutProps {
	children: ReactNode;
	title?: string;
}

export const MainLayout: FC<layoutProps> = ({ children, title }) => (
	<>
		<Head>
			<title>{title ? title : "Audiophile"}</title>
		</Head>
		<Header />
		{children}
		<h1>Footer</h1>
	</>
);
