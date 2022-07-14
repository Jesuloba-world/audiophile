import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, Hero, CategoryPick, Featured } from "containers";
import { GetCategoriesDocument, CategoryType } from "src/graphql/generated";
import { Client } from "src/apollo";

interface homeProps {
	categories: CategoryType[];
}

const Home: NextPageWithLayout<homeProps> = ({ categories }) => {
	return (
		<>
			<Hero />
			<CategoryPick home categories={categories} />
			<Featured />
		</>
	);
};

Home.getLayout = (page: ReactElement, { categories }) => {
	return (
		<MainLayout home categories={categories}>
			{page}
		</MainLayout>
	);
};

export default Home;

export async function getStaticProps() {
	const { data } = await Client.query({
		query: GetCategoriesDocument,
	});

	return {
		props: {
			categories: data.allCategories,
		},
	};
}
