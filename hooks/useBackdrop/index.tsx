import { ReactNode, createContext, useContext, FC } from "react";
import { BackDrop } from "./styles";
import { setShowBackdrop } from "store/slice/layoutSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

type backdropHookType = () => {
	showBackdrop: boolean;
	setBackdrop: (bool: boolean) => void;
};

const initialState = {
	showBackdrop: false,
	setBackdrop: (_: boolean) => {},
};

export const backdropContext = createContext(initialState);

export const BackdropProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const showBackdrop = useSelector(
		(state: RootState) => state.layout.showBackdrop
	);
	const showLogin = useSelector((state: RootState) => state.layout.showLogin);
	const dispatch = useDispatch();

	const setBackdrop = (bool: boolean) => dispatch(setShowBackdrop(bool));

	return (
		<backdropContext.Provider value={{ showBackdrop, setBackdrop }}>
			{showBackdrop ? (
				<BackDrop
					isLogin={showLogin}
					onClick={() => setBackdrop(false)}
				/>
			) : null}
			{children}
		</backdropContext.Provider>
	);
};

export const useBackdrop: backdropHookType = () => {
	const { setBackdrop, showBackdrop } = useContext(backdropContext);
	return {
		showBackdrop,
		setBackdrop,
	};
};
