import { useAppDispatch } from "../store";

import { Product } from "../types/product";

import { addBasketItem } from "../features/basketSlice";

import styled from "styled-components";

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
`;

const Image = styled.img`
  width: 300px;
  margin: 90px;
`;

const Info = styled.div`
  margin-top: 90px;
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
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
