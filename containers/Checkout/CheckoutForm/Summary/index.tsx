import { FC, useEffect } from "react";
import {
	Container,
	Heading,
	Items,
	Loader,
	Prices,
	Price,
	PriceId,
	PriceNumber,
	Grand,
	GrandNumber,
} from "./styles";
import { GenButton, CartItem } from "components";
import { useQuery } from "@apollo/client";
import { MyCartDocument } from "src/graphql/generated";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";
import numeral from "numeral";

const VATpercentage = 20 / 100;

interface summaryProps {
	isCashOnDelivery: boolean;
	getAmount: (a: number) => void;
}

export const Summary: FC<summaryProps> = ({ isCashOnDelivery, getAmount }) => {
	const cart = useQuery(MyCartDocument);
	const theme: any = useTheme();

	const usercart = cart.data?.userCart;

	const sortedUserCart = usercart
		?.slice()
		.sort(
			(A, B) =>
				Number(new Date(A?.createdAt)) - Number(new Date(B?.createdAt))
		);

	const prices: { id: string; price: number }[] = [
		{
			id: "Total",
			price:
				sortedUserCart
					?.map((el) => el?.product.price * el?.quantity!)
					.reduce((a, b) => a + b, 0) || 0,
		},
		{
			id: "Shipping",
			price: 50,
		},
		{
			id: "VAT (Included)",
			price:
				sortedUserCart
					?.map((el) => el?.product.price * el?.quantity!)
					.reduce((a, b) => a + b * VATpercentage, 0) || 0,
		},
	];

	const grandTotal =
		prices.find((el) => el.id === "Total")?.price! +
		prices.find((el) => el.id === "Shipping")?.price!;

	useEffect(() => {
		getAmount(grandTotal);
	}, [getAmount, grandTotal]);

	return (
		<Container>
			<Heading>Summary</Heading>
			<Items>
				{cart.loading ? (
					<Loader>
						<Puff stroke={theme.sienna} />
					</Loader>
				) : (
					sortedUserCart?.map((item) => (
						<CartItem
							key={item?.id}
							cartId={item?.id}
							id={item?.product.id}
							image={item?.product.image?.desktop}
							altText={item?.product.image?.altText}
							name={item?.product.shortName}
							price={item?.product.price}
							quantity={item?.quantity}
							checkout
						/>
					))
				)}
			</Items>
			<Prices>
				{!cart.loading
					? prices.map((el, index) => (
							<Price key={index}>
								<PriceId>{el.id}</PriceId>
								<PriceNumber>
									${numeral(el.price).format("0,0")}
								</PriceNumber>
							</Price>
					  ))
					: null}
			</Prices>
			<Grand>
				{!cart.loading ? (
					<Price>
						<PriceId>Grand Total</PriceId>
						<GrandNumber>
							${numeral(grandTotal).format("0,0")}
						</GrandNumber>
					</Price>
				) : null}
			</Grand>
			<GenButton disabled={cart.loading} fullwidth>
				Continue {!isCashOnDelivery ? `& Pay` : ""}
			</GenButton>
		</Container>
	);
};
