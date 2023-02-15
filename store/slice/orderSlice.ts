import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewOrderMutationVariables } from "src/graphql/generated";

export interface orderInfoType extends NewOrderMutationVariables {
	cleared: boolean;
}

const initialState: orderInfoType = {
	address: {
		address: "",
		city: "",
		country: "",
		emailAddress: "",
		name: "",
		phoneNumber: "",
		zipcode: "",
	},
	paymentMethod: "",
	totalPrice: 0,
	cleared: true,
};

const orderInfoSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		setOrderInfo: (
			state,
			action: PayloadAction<NewOrderMutationVariables>
		) => {
			state.address = action.payload.address;
			state.paymentMethod = action.payload.paymentMethod;
			state.totalPrice = action.payload.totalPrice;
			state.cleared = false;
		},
		clearOrderInfo: (state) => {
			state = initialState;
		},
	},
});

export const { setOrderInfo, clearOrderInfo } = orderInfoSlice.actions;

export default orderInfoSlice.reducer;
