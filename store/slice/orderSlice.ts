import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { OrderProductType, OrderType } from "src/graphql/generated";

export interface orderInfoType {
	grandTotal: number;
	orderproducts: OrderProductType[];
	loading: boolean;
}

const initialState: orderInfoType = {
	grandTotal: 0,
	orderproducts: [],
	loading: false,
};

const orderInfoSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		startLoading: (state) => {
			state.loading = true;
		},
		setOrderInfo: (state, action: PayloadAction<OrderType>) => {
			state.grandTotal = action.payload.grandTotal;
			state.orderproducts = action.payload.orderproductSet;
			state.loading = false;
		},
		clearOrderInfo: (state) => {
			state.grandTotal = 0;
			state.orderproducts = [];
			state.loading = false;
		},
	},
});

export const { setOrderInfo, clearOrderInfo, startLoading } =
	orderInfoSlice.actions;

export default orderInfoSlice.reducer;
