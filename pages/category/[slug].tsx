import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout } from "containers";
import {
	GetCategoriesDocument,
	CategoryType,
	GetAllCategorySlugsDocument,
} from "src/graphql/generated";
import { Client } from "src/apollo";

interface categoryProps {
	categories: CategoryType[];
}

const Category: NextPageWithLayout<categoryProps> = () => {
	return <h1>This is a category</h1>;
};

Category.getLayout = (page: ReactElement, { categories }) => {
	return <MainLayout categories={categories}>{page}</MainLayout>;
};

export default Category;

export async function getStaticPaths() {
	const { data } = await Client.query({
		query: GetAllCategorySlugsDocument,
	});

	const paths = data.allCategories?.map((el) => {
		return {
			params: {
				slug: el?.slug,
			},
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
}

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
