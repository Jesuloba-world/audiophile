import React, { ReactNode, createContext, useContext, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setShowLogin } from "store/slice/layoutSlice";

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
	const showLogin = useSelector((state: RootState) => state.layout.showLogin);

	const dispatch = useDispatch();

	const setLogin = (bool: boolean) => {
		dispatch(setShowLogin(bool));
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
