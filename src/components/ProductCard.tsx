import { Product } from "../types/product";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import rate from "../assets/rate.png";
type props = {
  data: Product;
};
const ProductCard = ({ data }: props) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`prodcuts/${data?.id}`)}>
      <Image src={data.image} alt="" />
      <Title>{data.title}</Title>

      <Info>
        <Rate src={rate}></Rate>
        <Price className="price">{data.price}$</Price>
      </Info>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  border: 1px solid #b5caca;
  border-radius: 8px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  width: 250px;
  margin-top: 5px;
  position: relative;
  left: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 80px;
`;

const Image = styled.img`
  width: 50%;
  display: block;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  --c: #40bfff; /* the border color */
  --b: 5px; /* the border thickness*/
  --g: 3px; /* the gap on hover */
  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%, var(--c) 0;
  background: conic-gradient(
        from 180deg at top var(--b) right var(--b),
        var(--_g)
      )
      var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
    conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0
      var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
  transition: 0.3s, background-position 0.3s 0.3s;
  cursor: pointer;
  &:hover {
    --_i: 100%;
    transition: 0.3s, background-size 0.3s 0.3s;
  }
`;
const Info = styled.div``;

const Price = styled.p`
  position: absolute;
  padding: 5px;
  color: var(--primary-blue, #40bfff);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 32.4px */
  letter-spacing: 0.5px;
  margin-top: 25px;
  margin-left: 85px;
`;

const Title = styled.p`
  color: var(--neutral-dark, #223263);
  font-family: Poppins;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.5px;
`;
const Rate = styled.img`
  position: absolute;
  margin-left: 60px;
  margin-top: 10px;
`;
