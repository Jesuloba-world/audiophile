import { Inner } from "./style";
import { GenButton } from "components";
import { ModalWrapper } from "../ModalWrapper";
import { useOrder, useBackdrop } from "hooks";
import { useRouter } from "next/router";

export const OrderModal = () => {
	const { setBackdrop } = useBackdrop();
	const { setOrder } = useOrder();
	const navigate = useRouter();

	const backToHome = () => {
		setOrder(false);
		setBackdrop(false);
		navigate.push("/");
	};

	return (
		<ModalWrapper>
			<Inner>
				This is where the order is
				<GenButton fullwidth action={backToHome}>
					back to home
				</GenButton>
			</Inner>
		</ModalWrapper>
	);
};
