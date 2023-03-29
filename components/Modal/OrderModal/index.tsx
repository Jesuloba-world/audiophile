import { useState } from "react";
import {
	Inner,
	MarkContainer,
	Appreciation,
	Text,
	Loading,
} from "./orderModal.style";
import { GenButton, OrderItems } from "components";
import { ModalWrapper } from "../ModalWrapper";
import { useOrder, useBackdrop } from "hooks";
import { useRouter } from "next/router";
import CheckMark from "assets/checkout/checkmark.svg";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";

export const OrderModal = () => {
	const { setBackdrop } = useBackdrop();
	const { setOrder, orderInfo, loading, clearInfo } = useOrder();
	const navigate = useRouter();
	const theme: any = useTheme();

	const backToHome = () => {
		setOrder(false);
		setBackdrop(false);
		clearInfo();
		navigate.push("/");
	};

	return (
		<ModalWrapper>
			<Inner>
				{loading ? (
					<Loading>
						<Puff stroke={theme.sienna} />
						<h3>Preparing your order</h3>
					</Loading>
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
						<OrderItems
							items={orderInfo.products}
							grandTotal={orderInfo.total}
						/>
						<GenButton fullwidth action={backToHome}>
							back to home
						</GenButton>
					</>
				)}
			</Inner>
		</ModalWrapper>
	);
};
