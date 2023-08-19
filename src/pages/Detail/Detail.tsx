import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "store";

import { fetchDetailProduct, resetDetailProduct } from "features/productSlice";

import ProductDetail from "components/ProductDetail/ProductDetail";
import Footer from "components/Footer/Footer";
import { Product, ProductState } from "types/product";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const detail: any = useAppSelector((state) => state.product.detail);

  const { loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailProduct(id));
    } else {
      return;
    }
    return () => {
      dispatch(resetDetailProduct());
    };
  }, [dispatch, id]);

  if (loading) {
    return (
      <Loading>
        <Title>Loading...</Title>
      </Loading>
    );
  }
  return (
    <Wrapper>
      <ProductDetail detail={detail} />
      <Footer />
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div``;

const Loading = styled.div``;

const Title = styled.h1`
  text-align: center;
`;
