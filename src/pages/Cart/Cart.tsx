import { useAppSelector } from "store";

import Basket from "components/Basket/Basket";
import Footer from "components/Footer/Footer";

import { Product } from "types/product";

import * as S from "./style";
import { getBasketTotals } from "utils/basketTotal";

function Cart() {
  const { products } = useAppSelector((state) => state.basket);

  const total = getBasketTotals(products);
  return (
    <S.Wrapper>
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
              <S.Amount>{total}$</S.Amount>
            </S.WrapperAmount>

            <S.BuyButton>BUY</S.BuyButton>
          </S.TotalAmount>
        </div>
      ) : (
        <S.Attention>Add product to cart</S.Attention>
      )}

      <Footer />
    </S.Wrapper>
  );
}

export default Cart;
