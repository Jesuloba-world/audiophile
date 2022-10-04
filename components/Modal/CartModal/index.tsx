import { Container } from "./styles";
import { GenButton } from "components";

export const CartModal = () => {
	return (
		<Container>
			<h1>The Cart</h1>
			<GenButton fullwidth action={() => console.log("This is the cart")}>
				Checkout
			</GenButton>
		</Container>
	);
};
