import { Container } from "./styles";
import { GenButton } from "components";
import { useQuery } from "@apollo/client";
import { MyCartDocument } from "src/graphql/generated";
import { useMe } from "hooks";
import { useEffect } from "react";

export const CartModal = () => {
	const { loading, loggedIn } = useMe();

	const cart = useQuery(MyCartDocument);

	useEffect(() => {
		!loading && loggedIn && cart.refetch();
	}, [loading, loggedIn, cart]);

	!loading && console.log(cart.data);

	return (
		<Container>
			<h1>The Cart</h1>
			<GenButton fullwidth action={() => console.log("This is the cart")}>
				Checkout
			</GenButton>
		</Container>
	);
};
