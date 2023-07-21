import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { Product } from "../types/product";
import {
  addBasketItem,
  decreaseBasketItem,
  icreaseBasketItem,
} from "../features/basketSlice";

type props = {
  detail: Product;
};

const ProductDetail = ({ detail }: props) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.basket);
  const increment = () => {
    dispatch(icreaseBasketItem({ id: detail.id }));
  };
  const decrement = () => {
    dispatch(decreaseBasketItem({ id: detail.id }));
  };
  const addBasket = () => {
    dispatch(addBasketItem(detail));
  };

  return (
    <div className="product_detail">
      <img src={detail.image} alt="" />
      <div className="product_description">
        <h1>{detail.title}</h1>
        <p>{detail.description}</p>
        <h4> {detail?.rating?.count}</h4>
        <h4>Rating {detail?.rating?.rate}</h4>
        <h3>Price: {detail.price}$</h3>

        <div>
          <div onClick={decrement}>-</div>
          <p>{products.map((product: Product) => product.quantity)}</p>
          <div onClick={increment}>+</div>
        </div>
        <button onClick={addBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default ProductDetail;
