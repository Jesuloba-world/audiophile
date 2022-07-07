import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Copy } from "./Copy";
import { Category } from "containers";

interface layoutProps {
	children: ReactNode;
	title?: string;
	home?: boolean;
}

export const MainLayout: FC<layoutProps> = ({ children, title, home }) => (
	<>
		<Head>
			<title>{title ? title : "Audiophile"}</title>
		</Head>
		<Header home={home} />
		{children}
		{!home ? <Category home={home} /> : null}
		<Copy home={home} />
		<Footer />
	</>
);
