import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface layoutType {
	showBackdrop: boolean;
	showLogin: boolean;
}

const initialState: layoutType = {
	showBackdrop: false,
	showLogin: false,
};

export const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		setShowBackdrop: (state, action: PayloadAction<boolean>) => {
			state.showBackdrop = action.payload;
		},
		setShowLogin: (state, action: PayloadAction<boolean>) => {
			state.showLogin = action.payload;
		},
	},
});

export const { setShowBackdrop, setShowLogin } = layoutSlice.actions;

export default layoutSlice.reducer;
