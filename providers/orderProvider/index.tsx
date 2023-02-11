import { FC, ReactNode } from "react";
import { useOrder } from "hooks";
import { OrderModal } from "components";

export const OrderProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { showOrder } = useOrder();

	return (
		<>
			{showOrder ? <OrderModal /> : null}
			{children}
		</>
	);
};
