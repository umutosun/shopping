import { useAppDispatch } from "../../store";

import {
  getBasketTotal,
  decreaseBasketItem,
  deleteBasketItem,
  icreaseBasketItem,
} from "../../features/basketSlice";

import remove_icon from "../../assets/remove_icon.png";
import basket_line from "../../assets/basket_line.png";
import * as S from "./style";
import Navbar from "../Navbar/Navbar";

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
        <S.WrapperBasket>
          <S.Line src={basket_line}></S.Line>
          <S.ProductInfo>
            <S.ProductInfoLeft>
              <S.ButtonRemove
                onClick={remove}
                src={remove_icon}></S.ButtonRemove>
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
      }
    </div>
  );
};

export default Basket;
