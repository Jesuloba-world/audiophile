import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Copy } from "./Copy";
import { CategoryPick } from "containers";
import { CategoryType } from "src/graphql/generated";
import { BackdropProvider } from "hooks";

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
}) => {
	return (
		<>
			<Head>
				<title>{title ? title : "Audiophile"}</title>
			</Head>
			<BackdropProvider>
				<Header home={home} />
				{children}
				{!home ? (
					<CategoryPick home={home} categories={categories} />
				) : null}
				<Copy home={home} />
				<Footer />
			</BackdropProvider>
		</>
	);
};
