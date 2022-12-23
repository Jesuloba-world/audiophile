import {
	Container,
	LoaderContainer,
	CartItemContainer,
	Top,
	Bottom,
	RemoveAll,
	UserCartContainer,
	TotalPrice,
} from "./styles";
import { GenButton } from "components";
import { useQuery } from "@apollo/client";
import { MyCartDocument } from "src/graphql/generated";
import { useMe } from "hooks";
import { Puff, TailSpin } from "react-loading-icons";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { CartItem } from "components/Cards";
import numeral from "numeral";

export const CartModal = () => {
	const { loading, loggedIn } = useMe();
	const theme: any = useTheme();

	const cart = useQuery(MyCartDocument, {
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		!loading && loggedIn && cart.refetch();
	}, [loading, loggedIn, cart]);

	const usercart = cart.data?.userCart;

	const noItem = usercart?.length === 0;

	// !loading && console.log(usercart);

	const removeAllCartItems = () => {
		console.log("remove all");
	};

	const prices: number[] | undefined = usercart?.map((item) => {
		if (item) return item.product.price * item.quantity;
		else return 0;
	});

	const totalPrice = prices?.reduce((a, b) => a + b, 0);

	return (
		<Container>
			<CartItemContainer>
				<Top>
					<h6>Cart ({usercart?.length})</h6>
					<RemoveAll onClick={removeAllCartItems}>
						Remove all
					</RemoveAll>
				</Top>
				{cart.loading ? (
					<LoaderContainer>
						<Puff stroke={theme.sienna} />
					</LoaderContainer>
				) : (
					<UserCartContainer>
						{usercart?.map((item) => (
							<CartItem
								key={item?.id}
								image={item?.product.image?.desktop}
								altText={item?.product.image?.altText}
								name={item?.product.shortName}
								price={item?.product.price}
								quantity={item?.quantity}
							/>
						))}
					</UserCartContainer>
				)}
				<Bottom>
					<p>TOTAL</p>
					<TotalPrice>
						{cart.loading ? (
							<TailSpin stroke={theme.sienna} height={25} />
						) : (
							numeral(totalPrice).format("$0,0")
						)}
					</TotalPrice>
				</Bottom>
			</CartItemContainer>
			<GenButton
				disabled={noItem}
				fullwidth
				action={() => console.log("This is the cart")}
			>
				{noItem ? "No item to checkout" : "Checkout"}
			</GenButton>
		</Container>
	);
};
