import { useAppDispatch } from "../store";

import { Product } from "../types/product";

import { addBasketItem } from "../features/basketSlice";

import styled from "styled-components";
import { device } from "../style/device";

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
    <WrapperProduct>
      <Image src={detail.image} alt="" />

      <Info>
        <Title>{detail.title}</Title>
        <Description>{detail.description}</Description>
        <Count>Count: {detail?.rating?.count}</Count>
        <Rating>Rating: {detail?.rating?.rate}</Rating>
        <Price>Price: {detail.price}$</Price>
        <Button onClick={addBasket}>Add to Basket</Button>
      </Info>
    </WrapperProduct>
  );
};

export default ProductDetail;

const WrapperProduct = styled.div`
  display: flex;
  @media ${device.mobileM} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 300px;
  margin: 90px;
  @media ${device.mobileM} {
    width: 200px;
    margin-top: 40px;
    margin-left: 110px;
    margin-bottom: 0;
  }
  @media ${device.tablet} {
    width: 300px;
    margin: 90px;
  }
`;

const Info = styled.div`
  margin-top: 90px;
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.mobileM} {
    margin-left: 20px;
    margin-top: 30px;
    margin-right: 15px;
  }
  @media ${device.tablet} {
    margin-left: -50px;
    margin-top: 90px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  @media ${device.mobileM} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 50px;
  }
`;

const Description = styled.p``;

const Count = styled.h4`
  color: #e53a40;
`;

const Rating = styled.h4`
  color: #e53a40;
`;

const Price = styled.h2`
  color: #519d9e;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #e53a40;
  border: 1px solid #e53a40;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #519d9e;
  }
`;
