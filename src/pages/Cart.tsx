import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store";

import { getBasketTotal } from "../features/basketSlice";

import Basket from "../components/Basket";
import { Product } from "../types/product";

import styled from "styled-components";
import { device } from "../style/device";

function Cart() {
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
          <TotalAmount>
            Total Amount: <span>{totalAmount}$</span>
          </TotalAmount>
        </div>
      ) : (
        <div>Sepete Ürün Eklemediniz</div>
      )}
    </div>
  );
}

export default Cart;

const TotalAmount = styled.div`
  text-align: end;
  margin-right: 55px;
  @media ${device.mobileM} {
    text-align: center;
    margin-bottom: 30px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
`;
