import { FC } from "react";
import { Container } from "./styles";
import { Checkout } from "./Checkout";
import { Summary } from "./Summary";

export const CheckoutForm: FC = () => {
	return (
		<Container>
			<Checkout />
			<Summary />
		</Container>
	);
};
