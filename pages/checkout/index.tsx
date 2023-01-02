import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, CheckoutPageWrapper } from "containers";

const Checkout: NextPageWithLayout = () => {
	return <CheckoutPageWrapper>This is the Checkout form</CheckoutPageWrapper>;
};

Checkout.getLayout = (page: ReactElement) => {
	return <MainLayout checkout>{page}</MainLayout>;
};

export default Checkout;
