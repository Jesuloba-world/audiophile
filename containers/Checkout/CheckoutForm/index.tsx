import { FC, useState } from "react";
import { Container } from "./styles";
import { Checkout } from "./Checkout";
import { Summary } from "./Summary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./schema";
import { v4 as UUID } from "uuid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

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

	const config = {
		public_key: process.env.NEXT_PUBLIC_FLUTTER_PUBLIC_KEY!,
		tx_ref: UUID(),
		amount: amount / 100,
		currency: "USD",
		payment_options: "card, ussd",
		customer: {
			email: watch("email"),
			phone_number: watch("phone"),
			name: watch("name"),
		},
		customizations: {
			title: "Audiophile",
			description: "Payment for items in cart",
			logo: "",
		},
	};

	const fwConfig = {
		callback: (response: any) => {
			console.log(response);
			reset();
			closePaymentModal();
		},
		onClose: () => {},
	};

	const handleFlutterPayment = useFlutterwave(config);

	const onSubmitHandler = (data: any) => {
		if (data.payment === "flutterwave") {
			handleFlutterPayment(fwConfig);
		} else {
			// cash on delivery
		}
		// reset();
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
