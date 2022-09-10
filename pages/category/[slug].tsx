import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout } from "containers";
import {
	GetCategoriesDocument,
	CategoryType,
	GetAllCategorySlugsDocument,
	GetSpecificCategoryDocument,
} from "src/graphql/generated";
import { Client } from "src/apollo";
import { CategoryHero, CategoryProduct } from "containers";
import { GetStaticProps } from "next";

interface categoryProps {
	categories: CategoryType[];
	detail: CategoryType;
}

const Category: NextPageWithLayout<categoryProps> = ({ detail }) => {
	console.log(detail);
	return (
		<>
			<CategoryHero title={`${detail.name}`} />
			<CategoryProduct />
		</>
	);
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await Client.query({
		query: GetCategoriesDocument,
	});

	const categoryInfo = await Client.query({
		query: GetSpecificCategoryDocument,
		variables: {
			slug: `${params?.slug}`,
		},
	});

	return {
		props: {
			categories: data.allCategories,
			detail: categoryInfo.data.categoryBySlug,
		},
	};
};
