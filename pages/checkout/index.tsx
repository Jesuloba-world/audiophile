import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, CheckoutPageWrapper, CheckoutForm } from "containers";
import { useSession } from "next-auth/react";
import { PreAuthLoader, PreAuthDenied } from "components";

const Checkout: NextPageWithLayout = () => {
	const { status } = useSession();

	if (status === "loading") {
		return <PreAuthLoader />;
	}

	if (status === "unauthenticated") {
		return <PreAuthDenied />;
	}

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
