import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperTitle = styled.div`
  display: flex;
  gap: 600px;
  margin-left: 100px;
  margin-top: 15px;
  @media ${device.mobileM} {
    margin-left: 0px;
    gap: 140px;
  }
  @media ${device.tablet} {
    margin-left: 100px;
    gap: 600px;
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
    margin-left: 5px;
    font-size: 10px;
  }
  @media ${device.tablet} {
    margin-left: 50px;
    font-size: 20px;
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
    font-size: 20px;
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
    font-size: 20px;
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
  @media ${device.tablet} {
    font-size: 20px;
  }
`;
export const TotalAmount = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 100px;
  gap: 160px;
  @media ${device.mobileM} {
    gap: 10px;
  }
  @media ${device.tablet} {
    gap: 160px;
  }
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
`;

export const BuyButton = styled.button`
  width: 274.12px;
  height: 40px;
  margin-left: 920px;
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
    margin-left: 140px;
    width: 104.12px;
    height: 30px;
    margin-top: 10px;
  }
  @media ${device.tablet} {
    margin-left: 920px;
    width: 274.12px;
    height: 40px;
    margin-top: 25px;
  }
`;
