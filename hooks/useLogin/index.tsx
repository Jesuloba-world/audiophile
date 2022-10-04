import React, {
	ReactNode,
	createContext,
	useContext,
	useState,
	FC,
} from "react";

type LoginHookType = () => {
	showLogin: boolean;
	setLogin: (bool: boolean) => void;
};

const initialState = {
	showLogin: false,
	setLogin: (_: boolean) => {},
};

const LoginContext = createContext(initialState);

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [showLogin, setShowLogin] = useState(false);

	const setLogin = (bool: boolean) => {
		setShowLogin(bool);
	};

	return (
		<LoginContext.Provider value={{ showLogin, setLogin }}>
			{children}
		</LoginContext.Provider>
	);
};

export const useLogin: LoginHookType = () => {
	const { setLogin, showLogin } = useContext(LoginContext);

	return { setLogin, showLogin };
};
