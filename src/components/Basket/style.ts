import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperBasket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 55px;
  margin-top: 20px;
  align-items: center;
  gap: 10px;

  @media ${device.mobileM}, ${device.tablet}, ${device.laptop} {
    flex-direction: column;
    margin: 55px;
    margin-top: 30px;
  }

  @media ${device.mobileM} {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div``;

export const Line = styled.img`
  width: 100%;
  @media ${device.mobileM} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 350px;

  @media ${device.mobileM} {
    gap: 50px;
  }

  @media ${device.tablet} {
    gap: 50px;
  }

  @media ${device.laptop} {
    gap: 350px;
  }

  @media ${device.desktop} {
    gap: 870px;
  }
`;
export const ProductInfoLeft = styled.div`
  display: flex;
  width: 420px;

  @media ${device.mobileM} {
    width: 175px;
    margin-left: 10px;
  }

  @media ${device.mobileL} {
    margin-left: -50px;
  }

  @media ${device.tablet} {
    width: 330px;
    margin-left: 0;
  }

  @media ${device.laptop} {
    width: 420px;
    margin-left: 0;
  }

  @media ${device.desktop} {
    width: 420px;
    margin-left: -70px;
  }
`;
export const ButtonRemove = styled.img`
  cursor: pointer;
  width: 24px;
  height: 23px;
  margin-top: 50px;
  margin-right: 50px;

  @media ${device.mobileM} {
    margin-right: 10px;
  }

  @media ${device.tablet} {
    margin-right: 10px;
  }

  @media ${device.laptop} {
    margin-right: 50px;
  }

  @media ${device.desktop} {
    margin-right: 50px;
    width: 34px;
    height: 33px;
  }
`;
export const Image = styled.img`
  margin-right: 10px;
  width: 100px;
  height: 100px;
  margin-top: 20px;

  @media ${device.mobileM} {
    margin-right: 0px;
    width: 50px;
    height: 50px;
    margin-top: 40px;
  }

  @media ${device.tablet} {
    margin-right: 10px;
    width: 70px;
    height: 70px;
    margin-top: 20px;
  }

  @media ${device.laptop} {
    margin-right: 10px;
    width: 100px;
    height: 100px;
    margin-top: 20px;
  }

  @media ${device.desktop} {
    margin-right: 10px;
    width: 150px;
    height: 150px;
    margin-top: 20px;
  }
`;
export const Title = styled.h2`
  color: #262626;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 235px;
  margin-left: 10px;
  margin-top: 50px;

  @media ${device.mobileM} {
    font-size: 10px;
    margin-top: 40px;
    width: 55px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    margin-top: 50px;
    width: 135px;
  }

  @media ${device.laptop} {
    font-size: 16px;
    margin-top: 50px;
    width: 235px;
  }

  @media ${device.desktop} {
    font-size: 20px;
    margin-top: 50px;
    width: 270px;
    margin-left: 20px;
  }
`;

export const ProductInfoRight = styled.div`
  display: flex;
  width: 420px;
  gap: 75px;

  @media ${device.mobileM} {
    gap: 20px;
    width: 175px;
    margin-left: -50px;
  }

  @media ${device.tablet} {
    gap: 50px;
    width: 330px;
  }

  @media ${device.laptop} {
    gap: 75px;
    width: 420px;
  }

  @media ${device.desktop} {
    gap: 105px;
    width: 520px;
  }
`;

export const Price = styled.p`
  color: #262626;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 65px;
  height: 21px;
  margin-top: 45px;

  @media ${device.mobileM} {
    font-size: 12px;
    width: 50px;
    height: 21px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    width: 65px;
    height: 21px;
  }

  @media ${device.desktop} {
    font-size: 24px;
    width: 65px;
    height: 21px;
    margin-left: -110px;
  }
`;

export const Button = styled.button`
  display: flex;
  background-color: #f6f7f8;
  border: 1px solid gray;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 114px;
  border: 1px solid #f6f7f8;
  margin-top: 45px;
  width: 114px;

  @media ${device.mobileM} {
    width: 94px;
    height: 10px;
    padding: 10px;
  }

  @media ${device.tablet} {
    width: 114px;
    height: 30px;
    padding: 15px;
  }

  @media ${device.desktop} {
    width: 124px;
    height: 30px;
    padding: 15px;
  }
`;

export const ButtonDecrement = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: #33a0ff;

  @media ${device.mobileM} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const Quantity = styled.p`
  color: #262626;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${device.mobileM} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const ButtonIncrement = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: #33a0ff;

  @media ${device.mobileM} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
export const UnitPrice = styled.p`
  width: 65px;
  height: 21px;
  margin-top: 45px;
  color: #262626;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${device.mobileM} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 18px;
  }
`;
