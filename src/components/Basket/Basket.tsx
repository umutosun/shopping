import { useAppDispatch } from "../../store";

import {
  getBasketTotal,
  decreaseBasketItem,
  deleteBasketItem,
  icreaseBasketItem,
} from "../../features/basketSlice";

import * as S from "./style";

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
          <S.Image src={product.image} alt="" />
          <S.Title>{product.title}</S.Title>
          <S.Sale>
            <S.Button>
              <S.ButtonDecrement onClick={decrement}>-</S.ButtonDecrement>
              <S.Quantity>{product.quantity}</S.Quantity>
              <S.ButtonIncrement onClick={increment}>+</S.ButtonIncrement>
            </S.Button>
            <S.Price>{product.price * product.quantity}$</S.Price>
            <S.ButtonRemove onClick={remove}>Remove Product</S.ButtonRemove>
          </S.Sale>
        </S.WrapperBasket>
      }
    </div>
  );
};

export default Basket;
