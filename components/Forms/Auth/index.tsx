import { FC, useState } from "react";
import { Container, Heading, SwitchButton, SvgContainer } from "./styles";
import Close from "assets/shared/ios-close.svg";
import { useLogin, useBackdrop } from "hooks";
import { LoginForm } from "./forms";

interface props {}

export const AuthForm: FC<props> = () => {
	const [isLogin, setIsLogin] = useState(true);

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
			<LoginForm />

			<SwitchButton onClick={switchlogin}>
				<p>
					{isLogin
						? "create an account instead"
						: "login to your account"}
				</p>
			</SwitchButton>
		</Container>
	);
};
