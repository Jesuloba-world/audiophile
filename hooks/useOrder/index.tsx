import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setShowOrder } from "store/slice/layoutSlice";
import {
	setOrderInfo,
	clearOrderInfo,
	orderInfoType,
} from "store/slice/orderSlice";
import { NewOrderMutationVariables } from "src/graphql/generated";

type OrderHookType = () => {
	showOrder: boolean;
	setOrder: (bool: boolean) => void;
	orderInfo: orderInfoType;
	setInfo: (data: NewOrderMutationVariables) => void;
	clearInfo: () => void;
};

export const useOrder: OrderHookType = () => {
	const showOrder = useSelector(
		(state: RootState) => state.layout.showOrderModal
	);
	const orderInfo = useSelector((state: RootState) => state.order);
	const dispatch = useDispatch();
	const setOrder = (bool: boolean) => dispatch(setShowOrder(bool));
	const setInfo = (data: NewOrderMutationVariables) =>
		dispatch(setOrderInfo(data));
	const clearInfo = () => dispatch(clearOrderInfo());

	return { setOrder, showOrder, orderInfo, setInfo, clearInfo };
};
