import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store";

import {
  fetchDetailProduct,
  resetDetailProduct,
} from "../features/productSlice";

import ProductDetail from "../components/ProductDetail/ProductDetail";
import Footer from "../components/Footer/Footer";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { detail, loading }: any = useAppSelector((state) => state.product);
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
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <ProductDetail detail={detail} />
      <Footer />
    </div>
  );
};

export default Detail;
