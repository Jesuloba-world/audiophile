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
import { useMutation, useLazyQuery } from "@apollo/client";
import { MyCartDocument, RemoveAllCartDocument } from "src/graphql/generated";
import { Puff, TailSpin } from "react-loading-icons";
import { useTheme } from "styled-components";
import { CartItem } from "components/Cards";
import numeral from "numeral";
import { useSelector } from "react-redux";
import { Confirm } from "notiflix";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useContext } from "react";
import { ModalContext } from "../../Buttons/IconButton";

export const CartModal = () => {
	const { status } = useSession();
	const theme: any = useTheme();
	const navigate = useRouter();

	const [cart, { data, client, loading }] = useLazyQuery(MyCartDocument);
	const [removeAll, removeAllState] = useMutation(RemoveAllCartDocument, {
		awaitRefetchQueries: true,
		refetchQueries: [{ query: MyCartDocument }],
	});

	const { removeModal, setBackdrop } = useContext(ModalContext);

	const usercart = data?.userCart;

	const sortedUserCart = usercart
		?.slice()
		.sort(
			(A, B) =>
				Number(new Date(A?.createdAt)) - Number(new Date(B?.createdAt))
		);

	const noItem = usercart?.length === 0;

	useEffect(() => {
		if (status === "authenticated") {
			cart();
		}
		if (status === "unauthenticated") {
			client.resetStore();
		}
	}, [client, status, cart]);

	const removeAllCartItems = async () => {
		Confirm.show(
			"Remove all",
			"are you sure?",
			"Proceed",
			"Cancel",
			() => {
				removeAll();
			},
			() => {},
			{
				className: "confirm-modal",
				borderRadius: "8px",
				fontFamily: "Manrope",
				titleColor: "#D87D4A",
				okButtonBackground: "#D87D4A",
			}
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
					{!noItem && status === "authenticated" ? (
						<RemoveAll onClick={removeAllCartItems}>
							Remove all
						</RemoveAll>
					) : null}
				</Top>
				{status === "unauthenticated" ? (
					<p>You are not logged in</p>
				) : (
					<>
						{loading ? (
							<LoaderContainer>
								<Puff stroke={theme.sienna} />
							</LoaderContainer>
						) : (
							<UserCartContainer>
								{sortedUserCart?.map((item) => (
									<CartItem
										key={item?.id}
										cartId={item?.id}
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
								{loading ||
								cartUpdating ||
								removeAllState.loading ? (
									<TailSpin
										stroke={theme.sienna}
										height={25}
									/>
								) : (
									numeral(totalPrice).format("$0,0")
								)}
							</TotalPrice>
						</Bottom>
					</>
				)}
			</CartItemContainer>
			<GenButton
				disabled={
					noItem ||
					cartUpdating ||
					removeAllState.loading ||
					status === "unauthenticated"
				}
				fullwidth
				action={() => {
					removeModal();
					setBackdrop(false);
					navigate.push("/checkout");
				}}
			>
				{noItem ? "No item to checkout" : "Checkout"}
			</GenButton>
		</Container>
	);
};
