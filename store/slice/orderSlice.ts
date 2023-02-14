import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewOrderMutationVariables } from "src/graphql/generated";

interface orderInfoType extends NewOrderMutationVariables {}

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
};

export const orderInfoSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		setOrderInfo: (
			state,
			action: PayloadAction<NewOrderMutationVariables>
		) => {
			state = action.payload;
		},
	},
});

export const { setOrderInfo } = orderInfoSlice.actions;

export default orderInfoSlice.reducer;
