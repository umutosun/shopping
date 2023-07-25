import { useNavigate } from "react-router-dom";

import { Product } from "../types/product";

import styled from "styled-components";

type props = {
  data: Product;
};
const ProductCard = ({ data }: props) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`prodcuts/${data?.id}`)}>
      <Price className="price">{data.price}$</Price>
      <Image src={data.image} alt="" />
      <Title>{data.title}</Title>
    </Wrapper>
  );
};

export default ProductCard;
const Wrapper = styled.div`
  border: 3px solid #b5caca;
  border-radius: 8px;
  box-shadow: 10px 10px gray;
  width: 250px;
  margin-bottom: 5px;
  margin-top: 5px;
  position: relative;
  left: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 15px;
`;
const Image = styled.img`
  width: 50%;
  padding: 15px;
  display: block;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  --c: #697979; /* the border color */
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
const Price = styled.p`
  position: absolute;
  right: 0;
  background-color: black;
  color: white;
  top: 2px;
  padding: 5px;
`;

const Title = styled.p`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
