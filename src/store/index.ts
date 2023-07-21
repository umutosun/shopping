import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import productSlice from "../features/productSlice";
import categorySlice from "../features/categorySlice";
import basketSlice from "../features/basketSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    basket: basketSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
