import React from "react";

import { deleteBasketItem, icreaseBasketItem } from "../features/basketSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { Product } from "../types/product";

const Basket = ({ product }: any) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {
        <div className="basket">
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <h1>
            {product.price} TL ({product.quantity})
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
