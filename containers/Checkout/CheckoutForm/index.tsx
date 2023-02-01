import { FC } from "react";
import { Container } from "./styles";
import { Checkout } from "./Checkout";
import { Summary } from "./Summary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./schema";

export const CheckoutForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		resolver: yupResolver(checkoutSchema),
		defaultValues: {
			payment: "paystack",
		},
	});

	const onSubmitHandler = (data: any) => {
		console.log({ data });
		reset();
	};

	return (
		<Container onSubmit={handleSubmit(onSubmitHandler)}>
			<Checkout
				register={register}
				errors={errors}
				selectedPayment={watch("payment")}
			/>
			<Summary />
		</Container>
	);
};
