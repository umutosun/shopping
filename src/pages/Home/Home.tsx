import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";

import {
  fetchCategoryProduct,
  fetchProduct,
} from "../../features/productSlice";

import ProductCard from "../../components/ProductCard/ProductCard";
import Catagories from "../../components/Catagories/Catagories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { getCategories } from "../../features/categorySlice";

import article_shoes from "../../assets/article_shoes.png";
import underline from "../../assets/underline.png";
import car_icon from "../../assets/car_icon.png";
import refund_icon from "../../assets/refund_icon.png";
import support_icon from "../../assets/support_icon.png";
import industry_icon from "../../assets/industry_icon.png";
import tools_icon from "../../assets/tools_icon.png";
import community_icon from "../../assets/community_icon.png";
import article_three_shoes from "../../assets/article_three_shoes.png";
import article_rate from "../../assets/article_rate.png";

import * as S from "./style";

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

  return (
    <S.Wrapper>
      <Header />

      <S.Input
        type="text"
        placeholder="search for products..."
        onChange={(e) => {
          let product = data.filter((item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setSearch(product);
        }}
      />

      <S.Search>Search</S.Search>

      <S.Title>Our Product</S.Title>

      <S.Category>
        <S.All onClick={all}>All</S.All>
        {category?.map((category, i) => (
          <Catagories
            key={i}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </S.Category>

      {loading ? (
        <S.Loading>Loading...</S.Loading>
      ) : (
        <S.WrapperProduct>
          {data && search.map((data, i) => <ProductCard key={i} data={data} />)}
        </S.WrapperProduct>
      )}

      <S.Sneakers>
        <S.Info>
          <S.P1>Adidas Men Running Sneakers</S.P1>
          <S.P2>Performance and design. Taken right to the edge.</S.P2>
          <S.P3>SHOP NOW</S.P3>
          <S.Underline src={underline} alt="underline" />
        </S.Info>
        <S.Image src={article_shoes} />
      </S.Sneakers>

      <S.Article>
        <S.Shipping>
          <S.CarIcon src={car_icon} alt="car icon" />

          <S.ShippingTitle>FREE SHIPPING</S.ShippingTitle>

          <S.ShippingP>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </S.ShippingP>
        </S.Shipping>

        <S.Refund>
          <S.RefundIcon src={refund_icon} alt="refund icon" />

          <S.RefundTitle>100% REFUND</S.RefundTitle>

          <S.RefundP>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </S.RefundP>
        </S.Refund>

        <S.Support>
          <S.SupportIcon src={support_icon} alt="support icon" />

          <S.SupportTitle>SUPPORT 24/7</S.SupportTitle>

          <S.SupportP>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </S.SupportP>
        </S.Support>
      </S.Article>

      <S.ArticleTwo>
        <S.ArticleTitle>LATEST NEWS</S.ArticleTitle>

        <S.ArticleInfo>
          <S.Industry>
            <S.IndustryIcon src={industry_icon} alt="industry icon" />

            <S.IndustryInfo>
              <S.IndustryInfoP1>01 Jan, 2015</S.IndustryInfoP1>

              <S.IndustryInfoP2>Fashion Industry</S.IndustryInfoP2>

              <S.IndustryInfoP3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.IndustryInfoP3>
            </S.IndustryInfo>
          </S.Industry>

          <S.Tools>
            <S.ToolsIcon src={tools_icon} alt="tools icon" />

            <S.ToolsInfo>
              <S.ToolsInfoP1>01 Jan, 2015</S.ToolsInfoP1>

              <S.ToolsInfoP2>Best Design Tools</S.ToolsInfoP2>

              <S.ToolsInfoP3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ToolsInfoP3>
            </S.ToolsInfo>
          </S.Tools>

          <S.Community>
            <S.CommunityIcon src={community_icon} alt="community icon" />

            <S.CommunityInfo>
              <S.CommunityInfoP1>01 Jan, 2015</S.CommunityInfoP1>

              <S.CommunityInfoP2>HR Community</S.CommunityInfoP2>

              <S.CommunityInfoP3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.CommunityInfoP3>
            </S.CommunityInfo>
          </S.Community>
        </S.ArticleInfo>
      </S.ArticleTwo>

      <S.ArticleThree>
        <S.ArticleThreeTitle>FEATURED PRODUCTS</S.ArticleThreeTitle>

        <S.ArticleProduct>
          <S.ProductOne>
            <S.ImageOne src={article_three_shoes} alt="article three shoes" />

            <S.ProductOneInfo>
              <S.OneTitle>Blue Swade Nike Sneakers</S.OneTitle>

              <S.OneRate src={article_rate} alt="article rate" />

              <S.ProductPrice>
                <S.OnePrice>$499</S.OnePrice>
                <S.OneDiscount>$599</S.OneDiscount>
              </S.ProductPrice>
            </S.ProductOneInfo>
          </S.ProductOne>

          <S.ProductOne>
            <S.ImageOne src={article_three_shoes} alt="article three shoes" />

            <S.ProductOneInfo>
              <S.OneTitle>Blue Swade Nike Sneakers</S.OneTitle>

              <S.OneRate src={article_rate} alt="article rate" />

              <S.ProductPrice>
                <S.OnePrice>$499</S.OnePrice>
                <S.OneDiscount>$599</S.OneDiscount>
              </S.ProductPrice>
            </S.ProductOneInfo>
          </S.ProductOne>

          <S.ProductOne>
            <S.ImageOne src={article_three_shoes} alt="article three shoes" />

            <S.ProductOneInfo>
              <S.OneTitle>Blue Swade Nike Sneakers</S.OneTitle>

              <S.OneRate src={article_rate}></S.OneRate>

              <S.ProductPrice>
                <S.OnePrice>$499</S.OnePrice>
                <S.OneDiscount>$599</S.OneDiscount>
              </S.ProductPrice>
            </S.ProductOneInfo>
          </S.ProductOne>
        </S.ArticleProduct>
      </S.ArticleThree>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
