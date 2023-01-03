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
	} = useForm({
		resolver: yupResolver(checkoutSchema),
	});

	console.log(errors);

	const onSubmitHandler = (data: any) => {
		console.log({ data });
		reset();
	};

	return (
		<Container onSubmit={handleSubmit(onSubmitHandler)}>
			<Checkout register={register} />
			<Summary />
		</Container>
	);
};
