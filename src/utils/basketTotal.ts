import { Product } from "types/product";

export const getBasketTotals = (products: Product[]) => {
  return products.reduce((basketTotal: number, product: Product) => {
    return (basketTotal += product.price * product.quantity);
  }, 0);
};
