import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BasketState, Product } from "../types/product";

const storeInLocalStorage = (data: any) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState: BasketState = {
  products: [],
  itemCount: 0,
  totalAmount: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<Product>) => {
      const isHaveBasket = state.products.some(
        (item) => item.id === action.payload.id
      );
      if (isHaveBasket) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
      storeInLocalStorage(state.products);
    },
    icreaseBasketItem: (state, action) => {
      state.products = state.products.map((basketItem) =>
        basketItem.id === action.payload.id
          ? {
              ...basketItem,
              quantity: basketItem.quantity > 1 ? basketItem.quantity + 1 : 2,
            }
          : basketItem
      );
    },
    decreaseBasketItem: (state, action) => {
      state.products = state.products.map((basketItem) =>
        basketItem.id === action.payload.id
          ? {
              ...basketItem,
              quantity: basketItem.quantity > 1 ? basketItem.quantity - 1 : 1,
            }
          : basketItem
      );
    },
    deleteBasketItem: (state, action: PayloadAction<Number>) => {
      const tempCart = state.products.filter(
        (item: Product) => item.id !== action.payload
      );
      state.products = tempCart;
      storeInLocalStorage(state.products);
    },

    getBasketTotal: (state) => {
      state.totalAmount = state.products.reduce(
        (basketTotal: number, product: Product) => {
          return (basketTotal += product.price * product.quantity);
        },
        0
      );
      state.itemCount = state.products.length;
    },
  },
});

export const {
  addBasketItem,
  icreaseBasketItem,
  decreaseBasketItem,
  deleteBasketItem,
  getBasketTotal,
} = basketSlice.actions;
export default basketSlice.reducer;
