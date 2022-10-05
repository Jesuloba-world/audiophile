import { FC, ReactNode } from "react";
import { useLogin } from "hooks";
import { LoginForm } from "components";

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { setLogin, showLogin } = useLogin();

	return (
		<>
			{showLogin ? <LoginForm /> : null}
			{children}
		</>
	);
};
