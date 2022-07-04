import { FC, ReactNode } from "react";
import Head from "next/head";

interface layoutProps {
	children: ReactNode;
	title?: string;
}

export const MainLayout: FC<layoutProps> = ({ children, title }) => (
	<>
		<Head>
			<title>{title ? title : "Audiophile"}</title>
		</Head>
		<h1>Header</h1>
		{children}
		<h1>Footer</h1>
	</>
);
