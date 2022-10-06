import { FC, useState } from "react";
import { Container, Heading, SwitchButton, SvgContainer } from "./styles";
import Close from "assets/shared/ios-close.svg";
import { useLogin, useBackdrop } from "hooks";
import { LoginForm, RegisterForm } from "./forms";

interface props {}

export const AuthForm: FC<props> = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const switchlogin = () => {
		setIsLogin((prev) => !prev);
	};

	const setError = (err: string) => {
		setErrorMessage(err);
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

			{isLogin ? (
				<LoginForm setError={setError} />
			) : (
				<RegisterForm setError={setError} />
			)}

			<SwitchButton onClick={switchlogin}>
				<p>{isLogin ? "create an account instead" : "login instead"}</p>
			</SwitchButton>
		</Container>
	);
};
