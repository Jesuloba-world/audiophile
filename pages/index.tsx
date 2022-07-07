import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, Hero, Category } from "containers";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
			<Category home />
		</>
	);
};

Home.getLayout = (page: ReactElement) => {
	return <MainLayout home>{page}</MainLayout>;
};

export default Home;
