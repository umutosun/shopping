import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../store";

import { fetchCategoryProduct, fetchProduct } from "../features/productSlice";

import ProductCard from "../components/ProductCard";
import Catagories from "../components/Catagories";

import styled from "styled-components";
import { device } from "../style/constants";

import { getCategories } from "../features/categorySlice";

const Home = () => {
  const [categories, setCategories] = useState<string>("");
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.product);
  const { category } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories) {
      dispatch(fetchCategoryProduct(categories));
    } else {
      dispatch(fetchProduct());
    }
  }, [dispatch, categories]);

  return (
    <Wrapper>
      <Category>
        <Title>Kategori</Title>
        {category?.map((category, i) => (
          <Catagories
            key={i}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </Category>
      <WrapperProduct>
        {data && data?.map((data, i) => <ProductCard key={i} data={data} />)}
      </WrapperProduct>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  gap: 20px;
  margin-top: 30px;
`;
const Category = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 350px;
  margin-bottom: 15px;
  @media ${device.mobileS} {
    gap: 5px;
    margin-left: 20px;
    margin-bottom: 40px;
    flex-direction: column;
  }
  @media ${device.mobileM} {
    gap: 2px;
    margin-left: 5px;
    margin-bottom: 40px;
  }
  @media ${device.mobileL} {
    gap: 0;
    margin-left: 2px;
    margin-bottom: 40px;
  }
`;
const Title = styled.h1`
  color: #e53a40;

  @media ${device.mobileS} {
    margin-left: 0;
    font-size: 15px;
  }
  @media ${device.mobileM} {
    margin-left: 0;
  }
  @media ${device.mobileL} {
    margin-left: 5px;
  }
`;
const WrapperProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-left: 150px;
  @media ${device.mobileS} {
    width: 100vh;
    margin-left: 0px;
  }
  @media ${device.mobileL} {
    margin-left: 100px;
  }
`;
