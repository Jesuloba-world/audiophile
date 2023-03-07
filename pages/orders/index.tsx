import type { NextPageWithLayout } from "types/next";
import { ReactElement } from "react";
import { MainLayout, CheckoutPageWrapper, OrderDisplay } from "containers";
import { useSession } from "next-auth/react";

const Orders: NextPageWithLayout = () => {
	const { status } = useSession();

	return (
		<CheckoutPageWrapper>
			<OrderDisplay />
		</CheckoutPageWrapper>
	);
};

Orders.getLayout = (page: ReactElement) => {
	return <MainLayout checkout>{page}</MainLayout>;
};

export default Orders;
