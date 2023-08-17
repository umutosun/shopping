import { useAppSelector } from "../../store";

import { SlBasket } from "react-icons/sl";

import { useNavigate } from "react-router-dom";

import navbar_icon from "./../../assets/navbar_icon.png";

import * as S from "./style";

function Navbar() {
  const navigate = useNavigate();

  const { products } = useAppSelector((state) => state.basket);

  return (
    <S.Wrapper>
      <S.Icon src={navbar_icon} />
      <S.Title onClick={() => navigate("/")}>UMUT'S MARKET</S.Title>
      <S.Category>
        <S.Electronics>ELECTRONİCS</S.Electronics>
        <S.Jewelery>JEWELERY</S.Jewelery>
        <S.MenClothing>MEN</S.MenClothing>
        <S.WomenClothing>WOMEN</S.WomenClothing>
      </S.Category>
      <S.Basket>
        <S.BasketCount onClick={() => navigate("cart")}>
          {products?.length}
        </S.BasketCount>
        <SlBasket
          size={27}
          className="slbasket"
          color="black"
          onClick={() => navigate("cart")}
        />
      </S.Basket>
    </S.Wrapper>
  );
}

export default Navbar;
