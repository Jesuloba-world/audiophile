import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Copy } from "./Copy";
import { Category } from "containers";
import { CategoryType } from "src/graphql/generated";

interface layoutProps {
	children: ReactNode;
	title?: string;
	home?: boolean;
	categories: CategoryType[];
}

export const MainLayout: FC<layoutProps> = ({
	children,
	title,
	home,
	categories,
}) => (
	<>
		<Head>
			<title>{title ? title : "Audiophile"}</title>
		</Head>
		<Header home={home} />
		{children}
		{!home ? <Category home={home} categories={categories} /> : null}
		<Copy home={home} />
		<Footer />
	</>
);
