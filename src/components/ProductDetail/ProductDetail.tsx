import { useAppDispatch, useAppSelector } from "../../store";

import { Product } from "../../types/product";

import { addBasketItem, deleteBasketItem } from "../../features/basketSlice";

import { NotificationManager } from "react-notifications";

import * as S from "./style";

type props = {
  detail: Product;
};

const ProductDetail = ({ detail }: props) => {
  const dispatch = useAppDispatch();
  const basketItems = useAppSelector((state) => state.basket.products);
  const addBasket = () => {
    dispatch(addBasketItem(detail));
    NotificationManager.info("Product added to cart", "", 3000);
  };
  const removeBasket = () => {
    const productToDelete = detail.id;
    dispatch(deleteBasketItem(productToDelete));
    NotificationManager.info("Product removed from cart", "", 3000);
  };
  return (
    <S.WrapperProduct>
      <S.Image src={detail.image} alt="" />
      <S.Info>
        <S.Title>{detail.title}</S.Title>
        <S.Description>{detail.description}</S.Description>
        <S.Count>Count: {detail?.rating?.count}</S.Count>
        <S.Rating>Rating: {detail?.rating?.rate}</S.Rating>
        <S.Price>Price: {detail.price}$</S.Price>
        <S.Button
          onClick={
            basketItems.some((item) => item.id === detail.id)
              ? removeBasket
              : addBasket
          }>
          {basketItems.some((item) => item.id === detail.id)
            ? "Remove from Basket"
            : "Add to Basket"}
        </S.Button>
      </S.Info>
    </S.WrapperProduct>
  );
};

export default ProductDetail;
