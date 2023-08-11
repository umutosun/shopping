import { Product } from "../../types/product";

import { useNavigate } from "react-router-dom";

import rate from "../../assets/rate.png";
import * as S from "./style";

type props = {
  data: Product;
};
const ProductCard = ({ data }: props) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => navigate(`prodcuts/${data?.id}`)}>
      <S.Image src={data.image} alt="" />
      <S.Title>{data.title}</S.Title>

      <S.Info>
        <S.Rate src={rate}></S.Rate>
        <S.Price className="price">{data.price}$</S.Price>
      </S.Info>
    </S.Wrapper>
  );
};

export default ProductCard;
