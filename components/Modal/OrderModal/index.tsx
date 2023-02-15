import { useState } from "react";
import { Inner, MarkContainer, Appreciation, Text } from "./style";
import { GenButton, OrderItems } from "components";
import { ModalWrapper } from "../ModalWrapper";
import { useOrder, useBackdrop } from "hooks";
import { useRouter } from "next/router";
import CheckMark from "assets/checkout/checkmark.svg";
import { NewOrderDocument, OrderProductType } from "src/graphql/generated";
import { useMutation } from "@apollo/client";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";
import { useEffect } from "react";

export const OrderModal = () => {
	const { setBackdrop } = useBackdrop();
	const { setOrder } = useOrder();
	const navigate = useRouter();
	const theme: any = useTheme();

	const backToHome = () => {
		setOrder(false);
		setBackdrop(false);
		// navigate.push("/");
	};

	const loading = false;

	return (
		<ModalWrapper>
			<Inner>
				{loading ? (
					<div>
						<Puff stroke={theme.sienna} />
						<h3>Preparing your order</h3>
					</div>
				) : (
					<>
						<MarkContainer>
							<CheckMark />
						</MarkContainer>
						<Appreciation>
							Thank you <br /> for your order
						</Appreciation>
						<Text>
							You will receive an email confirmation shortly
						</Text>
						{/* <OrderItems
							items={
								data?.order
									?.orderproductSet as OrderProductType[]
							}
							grandTotal={data?.order?.grandTotal}
						/> */}
						<GenButton fullwidth action={backToHome}>
							back to home
						</GenButton>
					</>
				)}
			</Inner>
		</ModalWrapper>
	);
};
