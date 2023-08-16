import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperTitle = styled.div`
  display: flex;
  gap: 600px;
  margin-left: 100px;
  margin-top: 15px;
  @media ${device.mobileM} {
    margin-left: 0px;
    gap: 105px;
  }
  @media ${device.tablet} {
    margin-left: 40px;
    gap: 200px;
  }
  @media ${device.laptop} {
    margin-left: 100px;
    gap: 575px;
  }
  @media ${device.desktop} {
    margin-left: 100px;
    gap: 875px;
  }
`;
export const TitleProduct = styled.div``;
export const ProductTitle = styled.p`
  color: #22262a;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 50px;
  @media ${device.mobileM} {
    margin-left: 35px;
    font-size: 10px;
  }
  @media ${device.tablet} {
    margin-left: 50px;
    font-size: 18px;
  }
  @media ${device.laptop} {
    margin-left: 50px;
    font-size: 20px;
  }
  @media ${device.desktop} {
    margin-left: 50px;
    font-size: 30px;
  }
`;
export const OtherTitle = styled.div`
  display: flex;
  gap: 100px;
  @media ${device.mobileM} {
    gap: 50px;
  }
  @media ${device.tablet} {
    gap: 100px;
  }
`;
export const PriceTitle = styled.p`
  color: #22262a;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
`;

export const QuantityTitle = styled.p`
  color: #22262a;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
`;
export const UnitPriceTitle = styled.p`
  color: #22262a;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    margin-left: -12px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    margin-left: 0;
  }
  @media ${device.desktop} {
    font-size: 30px;
    margin-left: 10px;
  }
`;
export const TotalAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 950px;
  @media ${device.mobileM} {
    margin-left: 50px;
  }
  @media ${device.mobileL} {
    margin-left: 70px;
  }
  @media ${device.tablet} {
    margin-left: 250px;
  }
  @media ${device.laptop} {
    margin-left: 950px;
  }
  @media ${device.desktop} {
    margin-left: 1350px;
  }
`;
export const WrapperAmount = styled.div`
  display: flex;
  gap: 100px;
`;
export const TotalAmountTitle = styled.p`
  color: #22262a;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 34px;
  }
`;
export const Amount = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 34px;
  }
`;

export const BuyButton = styled.button`
  width: 274.12px;
  height: 40px;
  margin-top: 25px;
  background-color: #33a0ff;
  border: 0px;
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    width: 294.12px;
    height: 45px;
    font-size: 22px;
  }
`;
