import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../store";

import { fetchCategoryProduct, fetchProduct } from "../features/productSlice";

import ProductCard from "../components/ProductCard";
import Catagories from "../components/Catagories";
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
    <div className="product">
      <div className="product-category">
        <h1>Kategori</h1>
        {category?.map((category, i) => (
          <Catagories
            key={i}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </div>
      <div className="ürünler">
        {data && data?.map((data, i) => <ProductCard key={i} data={data} />)}
      </div>
    </div>
  );
};

export default Home;
