import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setShowOrder } from "store/slice/layoutSlice";

type OrderHookType = () => {
	showOrder: boolean;
	setOrder: (bool: boolean) => void;
};

export const useOrder: OrderHookType = () => {
	const showOrder = useSelector(
		(state: RootState) => state.layout.showOrderModal
	);
	const dispatch = useDispatch();
	const setOrder = (bool: boolean) => dispatch(setShowOrder(bool));

	return { setOrder, showOrder };
};
