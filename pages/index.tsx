import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, Hero, CategoryPick, Featured } from "containers";
import {
	PopulateHomeDocument,
	PopulateHomeQuery,
	CategoryType,
	ProductImageType,
	ProductType,
	FeaturedProductType,
} from "src/graphql/generated";
import { Client } from "src/apollo";

interface homeProps {
	data: NonNullable<PopulateHomeQuery>;
}

const Home: NextPageWithLayout<homeProps> = ({ data }) => {
	return (
		<>
			<Hero
				image={data.hero?.image as ProductImageType}
				product={data.hero?.product as ProductType}
				copy={data.hero?.copy || ""}
			/>
			<CategoryPick
				home
				categories={data.allCategories as CategoryType[]}
			/>
			<Featured
				data={(data.featuredProducts as FeaturedProductType[]) || []}
			/>
		</>
	);
};

Home.getLayout = (page: ReactElement, { data }) => {
	return (
		<MainLayout home categories={data.allCategories}>
			{page}
		</MainLayout>
	);
};

export default Home;

export async function getStaticProps() {
	const { data } = await Client.query({
		query: PopulateHomeDocument,
	});

	return {
		props: {
			data,
		},
	};
}
