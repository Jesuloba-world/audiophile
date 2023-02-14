import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from "./slice/layoutSlice";
import cartReducer from "./slice/cartSlice";
import orderReducer from "./slice/orderSlice";

export const store = configureStore({
	reducer: { layout: LayoutReducer, cart: cartReducer, order: orderReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
