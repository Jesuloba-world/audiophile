import { ReactNode, useState, createContext, useContext, FC } from "react";
import { BackDrop } from "./styles";

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
	const [showBackdrop, setShowBackdrop] = useState(false);

	const setBackdrop = (bool: boolean) => setShowBackdrop(bool);

	return (
		<backdropContext.Provider value={{ showBackdrop, setBackdrop }}>
			{showBackdrop ? (
				<BackDrop onClick={() => setShowBackdrop(false)} />
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
