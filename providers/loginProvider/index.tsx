import { FC, ReactNode } from "react";
import { useLogin } from "hooks";

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { setLogin, showLogin } = useLogin();

	return <>{children}</>;
};
