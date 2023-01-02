import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Copy } from "./Copy";
import { CategoryPick } from "containers";
import { CategoryType } from "src/graphql/generated";
import { BackdropProvider, LoginProvider } from "providers";

interface layoutProps {
	children: ReactNode;
	title?: string;
	home?: boolean;
	checkout?: boolean;
	categories?: CategoryType[];
}

export const MainLayout: FC<layoutProps> = ({
	children,
	title,
	home,
	categories,
	checkout,
}) => {
	//TODO: use Redux to replace the Providers

	return (
		<>
			<Head>
				<title>{title ? title : "Audiophile"}</title>
			</Head>
			<LoginProvider>
				<BackdropProvider>
					<Header home={home} />
					{children}
					{!home || !checkout ? (
						categories ? (
							<CategoryPick home={home} categories={categories} />
						) : null
					) : null}
					{!checkout ? <Copy home={home} /> : null}
					<Footer />
				</BackdropProvider>
			</LoginProvider>
		</>
	);
};
