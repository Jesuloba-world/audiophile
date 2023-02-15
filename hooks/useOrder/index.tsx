import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setShowOrder } from "store/slice/layoutSlice";
import {
	setOrderInfo,
	clearOrderInfo,
	startLoading,
} from "store/slice/orderSlice";
import { OrderProductType, OrderType } from "src/graphql/generated";

type OrderHookType = () => {
	showOrder: boolean;
	setOrder: (bool: boolean) => void;
	orderInfo: {
		total: number;
		products: OrderProductType[];
	};
	setInfo: (data: OrderType) => void;
	clearInfo: () => void;
	loading: boolean;
	loadOrder: () => void;
};

export const useOrder: OrderHookType = () => {
	const showOrder = useSelector(
		(state: RootState) => state.layout.showOrderModal
	);
	const orderInfo = useSelector((state: RootState) => {
		return {
			total: state.order.grandTotal,
			products: state.order.orderproducts,
		};
	});
	const dispatch = useDispatch();
	const setOrder = (bool: boolean) => dispatch(setShowOrder(bool));
	const setInfo = (data: OrderType) => dispatch(setOrderInfo(data));
	const clearInfo = () => dispatch(clearOrderInfo());
	const loading = useSelector((state: RootState) => state.order.loading);
	const loadOrder = () => dispatch(startLoading());

	return {
		setOrder,
		showOrder,
		orderInfo,
		setInfo,
		clearInfo,
		loading,
		loadOrder,
	};
};
