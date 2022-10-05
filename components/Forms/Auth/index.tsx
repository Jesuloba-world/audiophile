import { FC, useState } from "react";
import {
	Container,
	Form,
	Bottom,
	CheckboxWrapper,
	ForgetText,
	Heading,
	SwitchButton,
	SvgContainer,
} from "./styles";
import { loginFormElements, signupFormElements } from "./constant";
import { GenButton, AuthInput } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import Link from "next/link";
import Close from "assets/shared/ios-close.svg";
import { useLogin, useBackdrop } from "hooks";

interface props {}

export const AuthForm: FC<props> = () => {
	const [isLogin, setIsLogin] = useState(true);

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

	const switchlogin = () => {
		setIsLogin((prev) => !prev);
	};

	const { setLogin } = useLogin();
	const { setBackdrop } = useBackdrop();

	return (
		<Container>
			<SvgContainer
				onClick={() => {
					setLogin(false);
					setBackdrop(false);
				}}
			>
				<Close />
			</SvgContainer>
			<Heading>
				{isLogin ? "Login to your account" : "Create your account"}
			</Heading>
			{/* {errorMessage && <ErrorBox error={errorMessage} />} */}
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

			<SwitchButton onClick={switchlogin}>
				<p>create an account instead</p>
			</SwitchButton>
		</Container>
	);
};