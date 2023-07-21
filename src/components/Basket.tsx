import { useEffect } from "react";
import {
  getBasketTotal,
  decreaseBasketItem,
  deleteBasketItem,
  icreaseBasketItem,
} from "../features/basketSlice";
import { useAppDispatch, useAppSelector } from "../store";

const Basket = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const increment = () => {
    dispatch(icreaseBasketItem({ id: product.id }));
    dispatch(getBasketTotal());
  };
  const decrement = () => {
    dispatch(decreaseBasketItem({ id: product.id }));
    dispatch(getBasketTotal());
  };
  const remove = () => {
    dispatch(deleteBasketItem(product.id));
    dispatch(getBasketTotal());
  };
  return (
    <div>
      {
        <div className="basket">
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <h1>
            {product.price} TL
            <button onClick={decrement}>-</button>({product.quantity})
            <button onClick={increment}>+</button>
            <p>Toplam Fiyati : {product.price * product.quantity}</p>
          </h1>
          <button onClick={remove}>Ürünü Sil</button>
        </div>
      }
    </div>
  );
};

export default Basket;
