import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, Hero, CategoryPick, Featured } from "containers";
import { GetCategoriesDocument, CategoryType } from "src/graphql/generated";
import { Client } from "src/apollo";

interface homeProps {
	categories: CategoryType[];
	refresh: string;
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

Home.getLayout = (page: ReactElement) => {
	return <MainLayout home>{page}</MainLayout>;
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
