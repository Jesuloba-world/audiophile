import { FC, useState } from "react";
import { Form, Bottom, ForgetText } from "../styles";
import { loginFormElements } from "../constant";
import { GenButton, InputWithLabel } from "components";
// import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import { useActions } from "./actions";
import { useTheme } from "styled-components";
import { Puff } from "react-loading-icons";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface props {
	setError: (err: string) => void;
}

export const LoginForm: FC<props> = ({ setError }) => {
	const [loading, setLoading] = useState(false);
	const [guesting, setGuesting] = useState(false);
	const { removeForm } = useActions({});
	const theme: any = useTheme();

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = async (data: any) => {
		setLoading(true);

		const response = await signIn("login", {
			id: data.id,
			password: data.password,
			redirect: false,
		});

		if (response?.ok) {
			setLoading(false);
			reset();
			removeForm();
			toast.success("Login successful");
		}
		if (response?.error) {
			setLoading(false);
			setError(response.error);
		}
	};

	const continueAsGuest = async () => {
		setGuesting(true);

		const response = await signIn("login", {
			id: "johnDoe",
			password: "3:NfcG:5CMXYN:L",
			redirect: false,
		});

		if (response?.ok) {
			setGuesting(false);
			reset();
			removeForm();
			toast.success("Login successful");
		}
		if (response?.error) {
			setGuesting(false);
			setError(response.error);
		}
	};

	return (
		<Form onSubmit={handleSubmit(handleLogin)}>
			{loginFormElements.map((element, index) => (
				<InputWithLabel
					{...element}
					key={index}
					register={register}
					error={errors[element.name]?.message as string}
				/>
			))}

			<Bottom>
				{/* <Link href={"/forget-password"}>
					<ForgetText>Forgot password?</ForgetText>
				</Link> */}
			</Bottom>

			<GenButton fullwidth disabled={loading}>
				{loading ? <Puff stroke={theme.white} /> : "LOGIN"}
			</GenButton>
			<GenButton
				fullwidth
				disabled={guesting}
				color="transparent"
				type="button"
				action={continueAsGuest}
			>
				{guesting ? <Puff stroke={theme.white} /> : "Continue as guest"}
			</GenButton>
		</Form>
	);
};
