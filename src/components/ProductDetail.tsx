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
        <h1>{detail.title}</h1>
        <p>{detail.description}</p>
        <h4>Count: {detail?.rating?.count}</h4>
        <h4>Rating: {detail?.rating?.rate}</h4>
        <h3>Price: {detail.price}$</h3>
        <button onClick={addBasket}>Add to Basket</button>
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
  margin-top: 100px;
  margin-left: 100px;
`;

const Info = styled.div`
  margin-top: 150px;
`;
