import type { NextPageWithLayout } from "types/next";
import { ReactElement, useEffect } from "react";
import { MainLayout, CheckoutPageWrapper, CheckoutForm } from "containers";
import { useBackdrop } from "hooks";

const Checkout: NextPageWithLayout = () => {
	const { setBackdrop } = useBackdrop();

	useEffect(() => {
		setBackdrop(false);
	}, [setBackdrop]);

	return (
		<CheckoutPageWrapper>
			<CheckoutForm />
		</CheckoutPageWrapper>
	);
};

Checkout.getLayout = (page: ReactElement) => {
	return <MainLayout checkout>{page}</MainLayout>;
};

export default Checkout;
