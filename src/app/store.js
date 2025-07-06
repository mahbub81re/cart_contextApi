import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart";
import { toast } from "../features/toast";

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		toast: toast.reducer,
	},
});