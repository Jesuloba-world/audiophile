import React, { ReactNode, createContext, useContext, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setShowLogin } from "store/slice/layoutSlice";

type LoginHookType = () => {
	showLogin: boolean;
	setLogin: (bool: boolean) => void;
};

export const useLogin: LoginHookType = () => {
	const showLogin = useSelector((state: RootState) => state.layout.showLogin);
	const dispatch = useDispatch();
	const setLogin = (bool: boolean) => dispatch(setShowLogin(bool));

	return { setLogin, showLogin };
};
