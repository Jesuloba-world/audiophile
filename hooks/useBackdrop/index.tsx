import { setShowBackdrop } from "store/slice/layoutSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

type backdropHookType = () => {
	showBackdrop: boolean;
	setBackdrop: (bool: boolean) => void;
	toggleBackdrop: () => void;
};

export const useBackdrop: backdropHookType = () => {
	const showBackdrop = useSelector(
		(state: RootState) => state.layout.showBackdrop
	);
	const dispatch = useDispatch();

	const setBackdrop = (bool: boolean) => dispatch(setShowBackdrop(bool));

	const toggleBackdrop = () => dispatch(setShowBackdrop(!showBackdrop));

	return {
		showBackdrop,
		setBackdrop,
		toggleBackdrop,
	};
};
