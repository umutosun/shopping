import { useAppDispatch } from "../store";

import {
  getBasketTotal,
  decreaseBasketItem,
  deleteBasketItem,
  icreaseBasketItem,
} from "../features/basketSlice";

import styled from "styled-components";
import { device } from "../style/device";

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
        <WrapperBasket>
          <Image src={product.image} alt="" />
          <Title>{product.title}</Title>
          <Sale>
            <Button>
              <ButtonDecrement onClick={decrement}>-</ButtonDecrement>
              <Quantity>{product.quantity}</Quantity>
              <ButtonIncrement onClick={increment}>+</ButtonIncrement>
            </Button>
            <Price>{product.price * product.quantity}$</Price>
            <ButtonRemove onClick={remove}>Ürünü Sil</ButtonRemove>
          </Sale>
        </WrapperBasket>
      }
    </div>
  );
};

export default Basket;

const WrapperBasket = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 55px;
  align-items: center;
  gap: 10px;
  @media ${device.mobileM} {
    flex-direction: column;
    margin-top: 30px;
  }
  @media ${device.tablet} {
    margin: 55px;
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100px;
  margin-right: 10px;
  @media ${device.mobileM} {
    width: 80px;
  }
  @media ${device.tablet} {
    width: 100px;
  }
`;
const Title = styled.h2`
  width: 900px;
  @media ${device.mobileM} {
    font-size: 15px;
    margin-left: 550px;
  }
  @media ${device.tablet} {
    font-size: 30px;
    margin-left: 0;
  }
`;
const Sale = styled.div`
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 35px;
    margin-bottom: -15px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 35px;
    margin-top: 0;
  }
`;
const Price = styled.p`
  width: 50px;
  font-size: 25px;
  margin-right: 30px;
  @media ${device.mobileM} {
    font-size: 20px;
    margin-left: 15px;
  }
  @media ${device.tablet} {
    margin-top: 0;
    font-size: 25px;
    margin-left: 0px;
  }
`;

const Button = styled.button`
  display: flex;
  background-color: white;
  border: 1px solid gray;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 100px;
  border-radius: 12px;
  border: 1px solid gray;
`;

const ButtonDecrement = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const Quantity = styled.p`
  font-size: 25px;
`;

const ButtonIncrement = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const ButtonRemove = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  background-color: #e53a40;
  color: white;
  &:hover {
    background-color: #519d9e;
  }
`;
