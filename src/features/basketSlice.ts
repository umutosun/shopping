import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState, Product } from "../types/product";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart")!);
  }
}; // verileri çağırdığım fonksiyonum

const storeInLocalStorage = (data: any) => {
  localStorage.setItem("cart", JSON.stringify(data));
}; // dışarden verdiğimiz verileri localstorage kaydeden fonk

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
    deleteBasketItem: (state, action: PayloadAction<Product>) => {
      const tempCart = state.products.filter(
        (item: any) => item.id !== action.payload
      );
      state.products = tempCart;
      storeInLocalStorage(state.products);
    },

    getBasketTotal: (state) => {
      state.totalAmount = state.products.reduce(
        (cartTotal: number, cartItem: Product) => {
          return cartTotal + cartItem.price * cartItem.quantity;
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
