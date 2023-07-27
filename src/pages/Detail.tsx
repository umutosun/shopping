import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import {
  fetchDetailProduct,
  resetDetailProduct,
} from "../features/productSlice";
import ProductDetail from "../components/ProductDetail";

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
    </div>
  );
};

export default Detail;
