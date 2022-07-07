import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, Hero, Category, Featured } from "containers";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
			<Category home />
			<Featured />
		</>
	);
};

Home.getLayout = (page: ReactElement) => {
	return <MainLayout home>{page}</MainLayout>;
};

export default Home;
