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
import { useQuery, useMutation } from "@apollo/client";
import { MyCartDocument, RemoveAllCartDocument } from "src/graphql/generated";
import { useMe } from "hooks";
import { Puff, TailSpin } from "react-loading-icons";
import { useEffect, useContext } from "react";
import { useTheme } from "styled-components";
import { CartItem } from "components/Cards";
import numeral from "numeral";
import { useSelector } from "react-redux";
import { ModalContext } from "../../Buttons/IconButton";
import { Confirm } from "notiflix";

export const CartModal = () => {
	const { loading, loggedIn } = useMe();
	const theme: any = useTheme();

	const cart = useQuery(MyCartDocument);
	const [removeAll, removeAllState] = useMutation(RemoveAllCartDocument, {
		awaitRefetchQueries: true,
		refetchQueries: [{ query: MyCartDocument }],
	});
	const { setBackdrop } = useContext(ModalContext);

	useEffect(() => {
		!loading && loggedIn && cart.refetch();
	}, [loading, loggedIn, cart]);

	const usercart = cart.data?.userCart;

	const sortedUserCart = usercart
		?.slice()
		.sort(
			(A, B) =>
				Number(new Date(A?.createdAt)) - Number(new Date(B?.createdAt))
		);

	const noItem = usercart?.length === 0;

	const removeAllCartItems = async () => {
		Confirm.show(
			"Remove all",
			"are you sure?",
			"Proceed",
			"Cancel",
			() => {
				removeAll();
			},
			() => {}
		);
	};

	const prices: number[] | undefined = usercart?.map((item) => {
		if (item) return item.product.price * item.quantity;
		else return 0;
	});

	const totalPrice = prices?.reduce((a, b) => a + b, 0);

	const cartItemLoadingStates = useSelector(
		(state: any) => state.cart.cartLoadingState
	);

	const cartUpdating = cartItemLoadingStates.some(
		(item: any) => item.isLoading === true
	);

	return (
		<Container>
			<CartItemContainer>
				<Top>
					<h6>Cart ({usercart?.length})</h6>
					{!noItem ? (
						<RemoveAll onClick={removeAllCartItems}>
							Remove all
						</RemoveAll>
					) : null}
				</Top>
				{cart.loading ? (
					<LoaderContainer>
						<Puff stroke={theme.sienna} />
					</LoaderContainer>
				) : (
					<UserCartContainer>
						{sortedUserCart?.map((item) => (
							<CartItem
								key={item?.id}
								id={item?.product.id}
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
						{cart.loading ||
						cartUpdating ||
						removeAllState.loading ? (
							<TailSpin stroke={theme.sienna} height={25} />
						) : (
							numeral(totalPrice).format("$0,0")
						)}
					</TotalPrice>
				</Bottom>
			</CartItemContainer>
			<GenButton
				disabled={noItem || cartUpdating || removeAllState.loading}
				fullwidth
				action={() => console.log("This is the cart")}
			>
				{noItem ? "No item to checkout" : "Checkout"}
			</GenButton>
		</Container>
	);
};
