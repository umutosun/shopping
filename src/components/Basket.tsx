import { useEffect } from "react";
import {
  decreaseBasketItem,
  deleteBasketItem,
  getBasketTotal,
  icreaseBasketItem,
} from "../features/basketSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { Product } from "../types/product";

const Basket = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.basket);
  const increment = () => {
    dispatch(icreaseBasketItem({ id: product.id }));
  };
  const decrement = () => {
    dispatch(decreaseBasketItem({ id: product.id }));
  };

  return (
    <div>
      {
        <div className="basket">
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <h1>
            {product.price} TL
            <button onClick={decrement}>-</button>({product.quantity})
            <button onClick={increment}>+</button>
          </h1>
          <button onClick={() => dispatch(deleteBasketItem(product.id))}>
            Ürünü Sil
          </button>
        </div>
      }
    </div>
  );
};

export default Basket;
