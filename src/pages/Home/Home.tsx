import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";

import {
  fetchCategoryProduct,
  fetchProduct,
} from "../../features/productSlice";

import ProductCard from "../../components/ProductCard";
import Catagories from "../../components/Catagories";

import { getCategories } from "../../features/categorySlice";

import { device } from "../../style/device";

import styled from "styled-components";
import Header from "../../components/Header/Header";

import article_shoes from "../../assets/article_shoes.png";
import underline from "../../assets/underline.png";
const Home = () => {
  const [categories, setCategories] = useState<string>("");

  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.product);

  const { category } = useAppSelector((state) => state.category);

  const [search, setSearch] = useState(data);

  const loading = useAppSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const all = () => {
    setCategories("");
  };

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
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <Header />
      <Input
        type="text"
        placeholder="search for products..."
        onChange={(e) => {
          let product = data.filter((item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setSearch(product);
        }}
      />
      <Search>Search</Search>
      <Title>Our Product</Title>
      <Category>
        <All onClick={all}>All</All>
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
      <Sneakers>
        <Info>
          <P1>Adidas Men Running Sneakers</P1>
          <P2>Performance and design. Taken right to the edge.</P2>
          <P3>SHOP NOW</P3>
          <Underline src={underline}></Underline>
        </Info>
        <Image src={article_shoes}></Image>
      </Sneakers>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  gap: 20px;
`;

const Category = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 250px;
  margin-bottom: 23px;
  width: 627px;
  gap: 60px;
`;

const All = styled.div`
  cursor: pointer;
  margin-top: 5px;
  color: #262626;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: #33a0ff;
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: #e53a40;
  color: #22262a;
  font-family: Poppins;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 520px;
  margin-top: 63px;
`;

const WrapperProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-left: 100px;
  margin-bottom: 50px;
  margin-top: 40px;

  @media ${device.laptopL} {
    margin-left: 150px;
  }
`;

const Input = styled.input`
  position: absolute;
  height: 43.3px;
  margin-left: 930px;
  width: 230px;
  border: 1px solid #bcddfe;
  margin-top: 170px;
  &:focus {
    outline: none;
    border-color: #e53a40;
  }
`;

const Search = styled.p`
  position: absolute;
  margin-left: 1160px;
  padding: 10px;
  border: 1px solid #bcddfe;
  margin-top: 170px;
  background-color: #40bfff;
  color: #fff;
`;
const Sneakers = styled.div`
  background-color: #40bfff;
  height: 550px;
  margin-top: 149px;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  margin-left: 110px;
  margin-top: 140px;
`;
const P1 = styled.p`
  color: #fff;
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const P2 = styled.p`
  color: #fff;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 23px;
  margin-bottom: 12px;
`;
const P3 = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;
const Underline = styled.img`
  position: absolute;
`;

const Image = styled.img`
  margin-top: -60px;
  width: 700.564px;
  height: 502.935px;
`;
