import { FC, useState } from "react";
import { Container } from "./styles";
import { Checkout } from "./Checkout";
import { Summary } from "./Summary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./schema";
import { usePaymentAction } from "./actions";

export const CheckoutForm: FC = () => {
	const [amount, setAmount] = useState<number>(0);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		resolver: yupResolver(checkoutSchema),
		defaultValues: {
			payment: "flutterwave",
			email: "",
			phone: "",
			name: "",
		},
	});

	const { handleFlutterPayment, afterPayment } = usePaymentAction({
		amount,
		reset,
		watch,
	});

	const onSubmitHandler = (data: any) => {
		if (data.payment === "flutterwave") {
			handleFlutterPayment();
		} else {
			// reset();
			afterPayment();
		}
	};

	const currentPayment = watch("payment");

	return (
		<Container onSubmit={handleSubmit(onSubmitHandler)}>
			<Checkout
				register={register}
				errors={errors}
				isCashOnDelivery={currentPayment === "cashondelivery"}
			/>
			<Summary
				isCashOnDelivery={currentPayment === "cashondelivery"}
				getAmount={(amount: number) => setAmount(amount)}
			/>
		</Container>
	);
};
