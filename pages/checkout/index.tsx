import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout } from "containers";

const Checkout: NextPageWithLayout = () => {
	return <h1>This is the Checkout page</h1>;
};

Checkout.getLayout = (page: ReactElement) => {
	return <MainLayout checkout>{page}</MainLayout>;
};

export default Checkout;
