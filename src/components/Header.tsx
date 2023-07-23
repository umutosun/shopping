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
      <InputWrapper>
        <Input type="text" placeholder="Arama Yapınız..." />
        <Search>
          <ImSearch size={25} />
        </Search>
      </InputWrapper>

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
const InputWrapper = styled.div`
  width: 150px;
  height: 50px;
  margin-top: 40px;
  position: relative;
  margin-left: -500px;
`;

const Input = styled.input`
  height: 35px;
  width: 500px;
  border-radius: 5px;
  border: 0;
  background-color: rgb(250, 240, 241);
`;

const Search = styled.div`
  position: absolute;
  margin-top: -30px;
  margin-left: 470px;
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
