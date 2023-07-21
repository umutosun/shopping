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

  const addBasket = () => {
    dispatch(addBasketItem(detail));
  };
  console.log();

  return (
    <div className="product_detail">
      <img src={detail.image} alt="" />
      <div className="product_description">
        <h1>{detail.title}</h1>
        <p>{detail.description}</p>
        <h4> {detail?.rating?.count}</h4>
        <h4>Rating {detail?.rating?.rate}</h4>
        <h3>Price: {detail.price}$</h3>

        <button onClick={addBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default ProductDetail;
