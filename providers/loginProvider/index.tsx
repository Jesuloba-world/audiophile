import { FC, ReactNode } from "react";
import { useLogin } from "hooks";
import { AuthForm } from "components";

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { showLogin } = useLogin();

	return (
		<>
			{showLogin ? <AuthForm /> : null}
			{children}
		</>
	);
};
