import { SlBasket } from "react-icons/sl";
import { ImSearch } from "react-icons/im";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useAppSelector } from "../store";

function Header() {
  const navigate = useNavigate();

  const { products } = useAppSelector((state) => state.basket);
  console.log(products, "carts");

  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}> Umut's Market</Title>
      <Basket>
        <BasketCount onClick={() => navigate("cart")}>
          {products?.length}
        </BasketCount>
        <SlBasket
          className="slbasket"
          size={55}
          color="#EFDC05"
          onClick={() => navigate("cart")}
        />
      </Basket>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: #519d9e;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  color: #efdc05;
  margin-top: 25px;
  cursor: pointer;
  margin-left: 15px;
  font-size: 50px;

  &:hover {
    color: #e53a40;
  }
`;

const Basket = styled.div`
  padding: 25px;
  position: relative;
  cursor: pointer;
`;
const BasketCount = styled.div`
  position: absolute;
  margin-left: 27px;
  margin-top: 5px;
  background-color: #e53a40;
  border: 1px solid #e53a40;
  border-radius: 100%;
  color: #fff;
  padding: 2px;
  cursor: pointer;
`;
