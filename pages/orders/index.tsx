import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, CheckoutPageWrapper, OrderDisplay } from "containers";
import { useSession } from "next-auth/react";
import { PreAuthLoader, PreAuthDenied } from "components";

const Orders: NextPageWithLayout = () => {
	const { status } = useSession();

	return (
		<CheckoutPageWrapper>
			{status === "loading" ? (
				<PreAuthLoader />
			) : status === "unauthenticated" ? (
				<PreAuthDenied />
			) : (
				<OrderDisplay />
			)}
		</CheckoutPageWrapper>
	);
};

Orders.getLayout = (page: ReactElement) => {
	return <MainLayout checkout>{page}</MainLayout>;
};

export default Orders;
