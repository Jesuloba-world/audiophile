import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartType {
	cartLoadingState: { id: string | number; isLoading: boolean }[];
}

const initialState: cartType = {
	cartLoadingState: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCartItem: (state, action: PayloadAction<string | number>) => {
			state.cartLoadingState = [
				...state.cartLoadingState,
				{ id: action.payload, isLoading: false },
			];
		},
		removeCartItem: (state, action: PayloadAction<string | number>) => {
			state.cartLoadingState = state.cartLoadingState.filter(
				(item) => item.id !== action.payload
			);
		},
		setCartItem: (
			state,
			action: PayloadAction<{ id: string | number; isLoading: boolean }>
		) => {
			state.cartLoadingState[
				state.cartLoadingState.findIndex(
					(item) => item.id === action.payload.id
				)
			].isLoading = action.payload.isLoading;
		},
	},
});

export const { addCartItem, removeCartItem, setCartItem } = cartSlice.actions;

export default cartSlice.reducer;
