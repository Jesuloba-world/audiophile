import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout } from "containers/layout/main";

const Home: NextPageWithLayout = () => {
	return (
		<div>
			<h1>This is the Audiophile</h1>
		</div>
	);
};

Home.getLayout = (page: ReactElement) => {
	return <MainLayout space>{page}</MainLayout>;
};

export default Home;
