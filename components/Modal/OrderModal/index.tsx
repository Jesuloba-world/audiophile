import { Inner, MarkContainer, Appreciation, Text } from "./style";
import { GenButton, OrderItems } from "components";
import { ModalWrapper } from "../ModalWrapper";
import { useOrder, useBackdrop } from "hooks";
import { useRouter } from "next/router";
import CheckMark from "assets/checkout/checkmark.svg";
import { CartItemType, MyCartDocument } from "src/graphql/generated";
import { useQuery } from "@apollo/client";

export const OrderModal = () => {
	const { setBackdrop } = useBackdrop();
	const { setOrder } = useOrder();
	const navigate = useRouter();

	const { data } = useQuery(MyCartDocument);

	const backToHome = () => {
		setOrder(false);
		setBackdrop(false);
		// navigate.push("/");
	};

	const usercart = data?.userCart;

	const sortedUserCart = usercart
		?.slice()
		.sort(
			(A, B) =>
				Number(new Date(A?.createdAt)) - Number(new Date(B?.createdAt))
		);

	return (
		<ModalWrapper>
			<Inner>
				<MarkContainer>
					<CheckMark />
				</MarkContainer>
				<Appreciation>
					Thank you <br /> for your order
				</Appreciation>
				<Text>You will receive an email confirmation shortly</Text>
				<OrderItems
					items={sortedUserCart as CartItemType[]}
					grandTotal={7148}
				/>
				<GenButton fullwidth action={backToHome}>
					back to home
				</GenButton>
			</Inner>
		</ModalWrapper>
	);
};
