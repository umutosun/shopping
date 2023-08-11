import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperBasket = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 55px;
  align-items: center;
  gap: 10px;
  @media ${device.mobileM} {
    flex-direction: column;
    margin-top: 30px;
  }
  @media ${device.tablet} {
    margin: 55px;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100px;
  margin-right: 10px;
  @media ${device.mobileM} {
    width: 80px;
  }
  @media ${device.tablet} {
    width: 100px;
  }
`;
export const Title = styled.h2`
  width: 900px;
  @media ${device.mobileM} {
    font-size: 15px;
    width: 300px;
  }
  @media ${device.tablet} {
    font-size: 30px;
    margin-left: 0;
  }
`;
export const Sale = styled.div`
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 35px;
    margin-bottom: -15px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 35px;
    margin-top: 0;
  }
`;
export const Price = styled.p`
  width: 50px;
  font-size: 25px;
  margin-right: 30px;
  @media ${device.mobileM} {
    font-size: 20px;
    margin-left: 15px;
  }
  @media ${device.tablet} {
    margin-top: 0;
    font-size: 25px;
    margin-left: 0px;
  }
`;

export const Button = styled.button`
  display: flex;
  background-color: white;
  border: 1px solid gray;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 100px;
  border-radius: 12px;
  border: 1px solid gray;
`;

export const ButtonDecrement = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const Quantity = styled.p`
  font-size: 25px;
`;

export const ButtonIncrement = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
export const ButtonRemove = styled.button`
  height: 40px;
  width: 130px;
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  background-color: #e53a40;
  color: white;
  &:hover {
    background-color: #519d9e;
  }
`;
