import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Copy } from "./Copy";
import { CategoryPick } from "containers";
import { CategoryType } from "src/graphql/generated";
import { BackdropProvider, LoginProvider, OrderProvider } from "providers";

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
	return (
		<>
			<Head>
				<title>{title ? title : "Audiophile"}</title>
			</Head>
			<LoginProvider>
				<BackdropProvider>
					<OrderProvider>
						<Header
							home={home}
							categories={categories as CategoryType[]}
						/>
						{children}
						{!(home || checkout) ? (
							categories ? (
								<CategoryPick
									home={home}
									categories={categories}
								/>
							) : null
						) : null}
						{!checkout ? <Copy home={home} /> : null}
						<Footer />
					</OrderProvider>
				</BackdropProvider>
			</LoginProvider>
		</>
	);
};
