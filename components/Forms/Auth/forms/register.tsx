import { FC, useState } from "react";
import { useTheme } from "styled-components";
import { Form, Bottom, ErrorText, CheckboxWrapper } from "../styles";
import { signupFormElements } from "../constant";
import { InputWithLabel, GenButton } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema";
import { MutationRegisterArgs } from "src/graphql/generated";
import { useActions } from "./actions";
import { Puff } from "react-loading-icons";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface props {
	setError: (err: string) => void;
}

export const RegisterForm: FC<props> = ({ setError }) => {
	const { removeForm } = useActions({});
	const theme: any = useTheme();
	const [loading, setLoading] = useState(false);

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(signUpSchema),
	});

	const handleRegister = async (data: any) => {
		setLoading(true);

		const param: MutationRegisterArgs = {
			username: data.username,
			email: data.email,
			password1: data.password,
			password2: data.password2,
		};

		const response = await signIn("register", {
			...param,
			redirect: false,
		});

		if (response?.ok) {
			setLoading(false);
			reset();
			removeForm();
			toast.success("Account created successfully");
		}
		if (response?.error) {
			setLoading(false);
			setError(response.error);
		}
	};

	return (
		<Form onSubmit={handleSubmit(handleRegister)}>
			{signupFormElements.map((element, index) => (
				<InputWithLabel
					{...element}
					key={index}
					register={register}
					error={errors[element.name]?.message as string}
				/>
			))}

			<Bottom stack>
				<CheckboxWrapper>
					<input type="checkbox" id="agree" {...register("agree")} />
					<label htmlFor="agree">
						<p>I agree with terms and conditions</p>
					</label>
				</CheckboxWrapper>
				{errors["agree"] && (
					<ErrorText>{errors["agree"].message as string}</ErrorText>
				)}
			</Bottom>

			<GenButton fullwidth disabled={loading}>
				{loading ? <Puff stroke={theme.white} /> : "Create account"}
			</GenButton>
		</Form>
	);
};
