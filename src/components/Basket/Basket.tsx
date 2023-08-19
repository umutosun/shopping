import { useAppDispatch } from "store";

import {
  decreaseBasketItem,
  deleteBasketItem,
  icreaseBasketItem,
} from "features/basketSlice";

import remove_icon from "assets/remove_icon.png";
import basket_line from "assets/basket_line.png";
import * as S from "./style";
import { Product } from "types/product";

const Basket = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(icreaseBasketItem({ id: product.id }));
  };

  const decrement = () => {
    dispatch(decreaseBasketItem({ id: product.id }));
  };

  const remove = () => {
    dispatch(deleteBasketItem(product.id));
  };
  return (
    <S.WrapperBasket>
      <S.Line src={basket_line} />

      <S.ProductInfo>
        <S.ProductInfoLeft>
          <S.ButtonRemove onClick={remove} src={remove_icon} />
          <S.Image src={product.image} alt="" />
          <S.Title>{product.title}</S.Title>
        </S.ProductInfoLeft>

        <S.ProductInfoRight>
          <S.Price>{product.price * product.quantity}$</S.Price>
          <S.Button>
            <S.ButtonDecrement onClick={decrement}>-</S.ButtonDecrement>
            <S.Quantity>{product.quantity}</S.Quantity>
            <S.ButtonIncrement onClick={increment}>+</S.ButtonIncrement>
          </S.Button>
          <S.UnitPrice>{product.price}$</S.UnitPrice>
        </S.ProductInfoRight>
      </S.ProductInfo>
    </S.WrapperBasket>
  );
};

export default Basket;
