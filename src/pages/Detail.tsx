import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { fetchDetailProduct } from "../features/productSlice";
import ProductDetail from "../components/ProductDetail";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { detail }: any = useAppSelector((state) => state.product);
  useEffect(() => {
    if (id) {
      dispatch(fetchDetailProduct(id));
    } else {
      return;
    }
  }, [dispatch, id]);

  return (
    <div>
      <ProductDetail detail={detail} />
    </div>
  );
};

export default Detail;
