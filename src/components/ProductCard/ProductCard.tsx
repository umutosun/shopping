import { Product } from "types/product";

import { useNavigate } from "react-router-dom";

import rate from "assets/rate.png";
import * as S from "./style";

type props = {
  product: Product;
};
const ProductCard = ({ product }: props) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => navigate(`prodcuts/${product?.id}`)}>
      <S.Image src={product.image} alt="" />
      <S.Title>{product.title}</S.Title>

      <S.Info>
        <S.Rate src={rate}></S.Rate>
        <S.Price className="price">{product.price}$</S.Price>
      </S.Info>
    </S.Wrapper>
  );
};

export default ProductCard;
