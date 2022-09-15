import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout } from "containers";
import {
	GetCategoriesDocument,
	CategoryType,
	ProductType,
	GetAllProductSlugsDocument,
	GetSpecificProductDocument,
} from "src/graphql/generated";
import { Client } from "src/apollo";
import { GetStaticProps } from "next";

interface categoryProps {
	categories: CategoryType[];
	detail: ProductType;
}

const Product: NextPageWithLayout<categoryProps> = ({ detail }) => {
	return <></>;
};

Product.getLayout = (page: ReactElement, { categories }) => {
	return <MainLayout categories={categories}>{page}</MainLayout>;
};

export default Product;

export async function getStaticPaths() {
	const { data } = await Client.query({
		query: GetAllProductSlugsDocument,
	});

	const paths = data.allProducts?.map((el) => {
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

	const productInfo = await Client.query({
		query: GetSpecificProductDocument,
		variables: {
			slug: `${params?.slug}`,
		},
	});

	return {
		props: {
			categories: data.allCategories,
			detail: productInfo.data.productBySlug,
		},
	};
};
