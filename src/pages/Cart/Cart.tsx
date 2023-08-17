import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store";

import { getBasketTotal } from "../../features/basketSlice";

import Basket from "../../components/Basket/Basket";
import { Product } from "../../types/product";

import * as S from "./style";
import Footer from "../../components/Footer/Footer";

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
      <S.WrapperTitle>
        <S.TitleProduct>
          <S.ProductTitle>PRODUCT</S.ProductTitle>
        </S.TitleProduct>
        <S.OtherTitle>
          <S.PriceTitle>PRICE</S.PriceTitle>
          <S.QuantityTitle>QTY</S.QuantityTitle>
          <S.UnitPriceTitle>UNIT PRICE</S.UnitPriceTitle>
        </S.OtherTitle>
      </S.WrapperTitle>
      {products?.length > 0 ? (
        <div>
          {products.map((product: Product, i) => (
            <Basket key={i} product={product} />
          ))}
          <S.TotalAmount>
            <S.WrapperAmount>
              <S.TotalAmountTitle>Total </S.TotalAmountTitle>
              <S.Amount>{totalAmount}$</S.Amount>
            </S.WrapperAmount>
            <S.BuyButton>BUY</S.BuyButton>
          </S.TotalAmount>
        </div>
      ) : (
        <div>Add product to cart</div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
