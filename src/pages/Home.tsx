import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../store";

import { fetchCategoryProduct, fetchProduct } from "../features/productSlice";

import ProductCard from "../components/ProductCard";
import Catagories from "../components/Catagories";

import styled from "styled-components";
import { device } from "../style/device";
import { getCategories } from "../features/categorySlice";

const Home = () => {
  const [categories, setCategories] = useState<string>("");
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.product);
  const { category } = useAppSelector((state) => state.category);
  const [search, setSearch] = useState(data);
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

  useEffect(() => {
    setSearch(data);
  }, [data]);
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Arama yapınız..."
        onChange={(e) => {
          let product = data.filter((item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setSearch(product);
        }}
      />
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
        {data && search.map((data, i) => <ProductCard key={i} data={data} />)}
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
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    width: 100%;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 10px;
  }
`;
const Title = styled.h1`
  color: #e53a40;
  @media ${device.mobileM} {
    margin-left: 15px;
  }
  @media ${device.laptop} {
    margin-left: 150px;
  }
  @media ${device.laptopL} {
    margin-left: 400px;
  }
`;
const WrapperProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-left: 150px;
  margin-bottom: 50px;
  @media ${device.mobileM} {
    margin-left: 45px;
  }
  @media ${device.tablet} {
    margin-left: 110px;
    margin-top: 40px;
    gap: 50px;
  }
  @media ${device.laptop} {
    margin-left: 80px;
  }
  @media ${device.laptopL} {
    margin-left: 150px;
  }
`;
const Input = styled.input`
  position: absolute;
  margin-top: -95px;
  margin-left: 450px;
  height: 35px;
  width: 500px;
  border-radius: 5px;
  border: 0;
  background-color: rgb(250, 240, 241);
  @media ${device.mobileM} {
    margin-left: 15px;
    margin-top: -65px;
    width: 310px;
    height: 25px;
  }
  @media ${device.tablet} {
    margin-left: 330px;
    margin-top: -100px;
  }
  @media ${device.laptop} {
    margin-left: 440px;
    height: 40px;
    width: 400px;
    border: 1px solid white;
    border-radius: 8px;
    &:focus {
      outline: none;
      border-color: #e53a40;
    }
  }
  @media ${device.laptopL} {
    width: 800px;
  }
`;
