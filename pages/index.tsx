import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout } from "containers/layout/main";
import { Hero } from "containers/Home";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
		</>
	);
};

Home.getLayout = (page: ReactElement) => {
	return <MainLayout home>{page}</MainLayout>;
};

export default Home;
