import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store";

import { getBasketTotal } from "../features/basketSlice";

import Basket from "../components/Basket";
import { Product } from "../types/product";
import ProductDetail from "../components/ProductDetail";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products, totalAmount, itemCount } = useAppSelector(
    (state) => state.basket
  );

  console.log(
    products,
    "carts",
    "total tutar",
    totalAmount,
    "ürün sayısı",
    itemCount
  );

  useEffect(() => {
    dispatch(getBasketTotal());
  }, [dispatch]);

  return (
    <div>
      {products?.length > 0 ? (
        <div>
          {products.map((product: Product, i) => (
            <Basket key={i} product={product} />
          ))}
          <div>
            TOPLAM TUTAR: <span>{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Sepete Ürün Eklemediniz</div>
      )}
    </div>
  );
}

export default Cart;
