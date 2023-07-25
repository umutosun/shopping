import { SlBasket } from "react-icons/sl";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { device } from "../style/device";

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
          size={55}
          className="slbasket"
          color="#ffff"
          onClick={() => navigate("cart")}
        />
      </Basket>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: #1b1f1f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 108px;
  @media ${device.mobileM} {
    width: 100%;
  }
`;
const Title = styled.h1`
  color: #fff;
  margin-top: 25px;
  cursor: pointer;
  margin-left: 15px;
  font-size: 50px;
  @media ${device.mobileM} {
    font-size: 25px;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
  &:hover {
    color: #e53a40;
  }
  @media ${device.laptopL} {
    margin-left: 50px;
  }
`;
const Basket = styled.div`
  @media ${device.mobileM} {
    margin-left: 0;
    margin-right: 15px;
    margin-top: 10px;
  }
  @media ${device.tablet} {
    margin-top: 20px;
  }
  @media ${device.laptop} {
    margin-top: 30px;
    margin-right: 40px;
  }
  @media ${device.laptopL} {
    margin-right: 50px;
  }
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
  @media ${device.mobileM} {
    margin-left: 25px;
  }
`;
