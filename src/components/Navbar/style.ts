import styled from "styled-components";
import { device } from "../../style/device";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 165px;

  @media ${device.mobileM} {
    height: 120px;
    width: 90%;
  }
  @media ${device.tablet} {
    height: 165px;
    width: 100%;
  }
`;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
  margin-top: 45px;
  margin-left: 102px;
  @media ${device.mobileM} {
    margin-left: 2px;
    width: 24px;
    height: 24px;
  }
  @media ${device.tablet} {
    margin-left: 25px;
    width: 44px;
    height: 44px;
  }
  @media ${device.laptop} {
    margin-left: 82px;
  }
`;

export const Title = styled.p`
  color: #22262a;
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 54px;
  margin-right: 240px;

  @media ${device.mobileM} {
    margin-left: 5px;
    margin-top: 45px;
    font-size: 9px;
    margin-right: 20px;
  }

  @media ${device.tablet} {
    margin-left: 4px;
    margin-top: 44px;
    font-size: 16px;
    margin-right: 40px;
  }

  @media ${device.laptop} {
    margin-left: 0;
    margin-top: 54px;
    font-size: 18px;
    margin-right: 240px;
  }

  @media ${device.desktop} {
    margin-left: 5px;
    margin-top: 45px;
    font-size: 30px;
    margin-right: 210px;
  }
`;
export const Category = styled.div`
  display: flex;
  gap: 82px;
  margin-top: 53px;
  color: #262626;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${device.mobileM} {
    gap: 20px;
    font-size: 10.5px;
    margin-top: 45px;
  }

  @media ${device.tablet} {
    gap: 35px;
    font-size: 18px;
    margin-top: 53px;
  }

  @media ${device.laptop} {
    gap: 82px;
    font-size: 24px;
    margin-top: 53px;
  }

  @media ${device.desktop} {
    gap: 110px;
    font-size: 35px;
    margin-top: 45px;
    margin-left: 200px;
  }
`;

export const Electronics = styled.p`
  cursor: pointer;
  &:hover {
    color: #40bfff;
  }
`;

export const Jewelery = styled.p`
  cursor: pointer;
  &:hover {
    color: #40bfff;
  }
`;

export const MenClothing = styled.p`
  cursor: pointer;
  &:hover {
    color: #40bfff;
  }
`;

export const WomenClothing = styled.p`
  cursor: pointer;
  &:hover {
    color: #40bfff;
  }
`;

export const Basket = styled.div`
  cursor: pointer;
  margin-top: 57px;
  margin-right: 56px;
  margin-left: 61px;

  @media ${device.mobileM} {
    margin-left: 15px;
    margin-top: 40px;
    margin-right: 0;
  }

  @media ${device.tablet} {
    margin-left: 41px;
    margin-top: 52px;
    margin-right: 56px;
  }

  @media ${device.laptop} {
    margin-left: 61px;
    margin-top: 57px;
    margin-right: 56px;
  }

  @media ${device.desktop} {
    margin-left: 91px;
    margin-top: 57px;
    margin-right: 56px;
  }
`;

export const BasketCount = styled.div`
  position: absolute;
  margin-left: 15px;
  stroke-width: 2px;
  stroke: var(--background-white, #fff);
  text-align: center;
  width: 20px;
  height: 20px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  background-color: #fb7181;
  margin-top: -5px;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
`;
