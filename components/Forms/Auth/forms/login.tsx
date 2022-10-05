import { Form, Bottom, CheckboxWrapper, ForgetText } from "../styles";
import { loginFormElements } from "../constant";
import { AuthInput, GenButton } from "components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";

export const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = (data: any) => {
		console.log(data);
	};

	return (
		<Form onSubmit={handleSubmit(handleLogin)}>
			{loginFormElements.map((element, index) => (
				<AuthInput
					{...element}
					key={index}
					register={register}
					error={errors[element.name]}
				/>
			))}

			<Bottom>
				<CheckboxWrapper>
					<input
						type="checkbox"
						id="remember"
						{...register("remember")}
					/>
					<label htmlFor="remember">
						<p>Remember me</p>
					</label>
				</CheckboxWrapper>

				<Link href={"/forget-password"}>
					<a>
						<ForgetText>Forgot password?</ForgetText>
					</a>
				</Link>
			</Bottom>

			<GenButton fullwidth>LOGIN {/*Loading here*/}</GenButton>
		</Form>
	);
};
