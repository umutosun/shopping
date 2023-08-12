import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperHeader = styled.div``;
export const Image = styled.img`
  width: 100%;
  height: 653.734px;
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;
export const Sale = styled.p`
  position: absolute;
  color: var(--background-white, #fff);
  margin-top: -410px;
  margin-left: 40px;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  width: 573.169px;
  height: 228.49px;
  flex-shrink: 0;
  @media ${device.mobileM} {
    margin-left: 10px;
    font-size: 34px;
    width: 373.169px;
    height: 28.49px;
  }
  @media ${device.tablet} {
    margin-left: 40px;
    font-size: 64px;
    width: 573.169px;
    height: 228.49px;
  }
`;

export const SaleProduct = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: -95px;
  gap: 0;
  @media ${device.mobileM} {
    gap: 10px;
    margin-left: 5px;
  }
  @media ${device.tablet} {
    margin-left: 40px;
    gap: 0;
  }
`;

export const Bag = styled.div``;
export const BagTitle = styled.p`
  position: absolute;
  width: 202.181px;
  height: 58.08px;
  color: var(--neutral-dark, #223263);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
  margin-top: 29px;
  margin-left: 52px;
  @media ${device.mobileM} {
    font-size: 13px;
    margin-top: 2px;
    margin-left: 0;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-top: 29px;
    margin-left: 52px;
  }
`;
export const BagImage = styled.img`
  height: 358.315px;
  @media ${device.mobileM} {
    height: 170px;
    margin-top: 2px;
  }
  @media ${device.tablet} {
    height: 358.315px;
    margin-top: 0;
  }
`;
export const BagPrice = styled.p`
  margin-left: 277px;
  margin-top: -90px;
  color: var(--primary-blue, #40bfff);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 54px */
  letter-spacing: 0.5px;
  width: 117.818px;
  position: absolute;
  @media ${device.mobileM} {
    margin-left: 112px;
    font-size: 17px;
    margin-top: -32px;
  }
  @media ${device.tablet} {
    margin-left: 277px;
    font-size: 30px;
    margin-top: -90px;
  }
`;
export const BagDiscount = styled.p`
  color: var(--neutral-grey, #9098b1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.5px;
  text-decoration: line-through;
  margin-top: -100px;
  margin-left: 52px;
  width: 75px;
  @media ${device.mobileM} {
    margin-top: -45px;
    margin-left: 5px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-top: -100px;
    margin-left: 52px;
    font-size: 18px;
  }
`;
export const BagPercentage = styled.p`
  width: 75px;
  margin-left: 133px;
  margin-top: -27px;
  color: var(--primary-red, #fb7181);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  @media ${device.mobileM} {
    margin-top: -22px;
    margin-left: 78px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-left: 133px;
    margin-top: -27px;
  }
`;

export const Shoes = styled.div``;
export const ShoesTitle = styled.p`
  position: absolute;
  width: 178.237px;
  height: 57.468px;
  color: var(--neutral-dark, #223263);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
  margin-top: 29px;
  margin-left: 52px;
  @media ${device.mobileM} {
    font-size: 13px;
    margin-top: 2px;
    margin-left: 0;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-top: 29px;
    margin-left: 52px;
  }
`;
export const ShoesImage = styled.img`
  margin-left: -2px;
  height: 358.315px;
  @media ${device.mobileM} {
    height: 170px;
  }
  @media ${device.tablet} {
    height: 358.315px;
  }
`;
export const ShoesPrice = styled.p`
  margin-left: 277px;
  margin-top: -340px;
  color: var(--primary-blue, #40bfff);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 54px */
  letter-spacing: 0.5px;
  width: 117.818px;
  position: absolute;
  @media ${device.mobileM} {
    margin-left: 120px;
    margin-top: -150px;
    font-size: 17px;
  }
  @media ${device.tablet} {
    margin-left: 277px;
    margin-top: -340px;
    font-size: 30px;
  }
`;
export const ShoesDiscount = styled.p`
  color: var(--neutral-grey, #9098b1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.5px;
  text-decoration: line-through;
  margin-top: -60px;
  margin-left: 145px;
  width: 75px;
  @media ${device.mobileM} {
    margin-top: -30px;
    margin-left: 15px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-top: -60px;
    margin-left: 145px;
    font-size: 18px;
  }
`;
export const ShoesPercentage = styled.p`
  width: 75px;
  margin-left: 223px;
  margin-top: -27px;
  color: var(--primary-red, #fb7181);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  @media ${device.mobileM} {
    font-size: 15px;
    margin-left: 90px;
    margin-top: -23px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    margin-left: 223px;
    margin-top: -27px;
  }
`;

export const ShoesTwo = styled.div``;
export const ShoesTwoTitle = styled.p`
  position: absolute;
  width: 202.181px;
  height: 58.08px;
  color: var(--neutral-dark, #223263);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
  margin-top: 29px;
  margin-left: 52px;
  @media ${device.mobileM} {
    font-size: 13px;
    margin-top: 2px;
    margin-left: 0;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-top: 29px;
    margin-left: 52px;
  }
`;
export const ShoesTwoImage = styled.img`
  margin-left: -2px;
  height: 358.315px;
  @media ${device.mobileM} {
    height: 170px;
  }
  @media ${device.tablet} {
    height: 358.315px;
  }
`;
export const ShoesTwoPrice = styled.p`
  margin-left: 255px;
  margin-top: -70px;
  color: var(--primary-blue, #40bfff);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 54px */
  letter-spacing: 0.5px;
  width: 117.818px;
  position: absolute;
  @media ${device.mobileM} {
    margin-left: 90px;
    font-size: 17px;
    margin-top: -35px;
  }
  @media ${device.tablet} {
    margin-left: 255px;
    font-size: 30px;
    margin-top: -70px;
  }
`;
export const ShoesTwoDiscount = styled.p`
  color: var(--neutral-grey, #9098b1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.5px;
  text-decoration: line-through;
  margin-top: -260px;
  margin-left: 52px;
  width: 75px;
  @media ${device.mobileM} {
    margin-top: -130px;
    margin-left: 5px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-top: -260px;
    margin-left: 52px;
    font-size: 18px;
  }
`;
export const ShoesTwoPercentage = styled.p`
  width: 75px;
  margin-left: 130px;
  margin-top: -27px;
  color: var(--primary-red, #fb7181);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  @media ${device.mobileM} {
    margin-top: -20px;
    margin-left: 75px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-left: 130px;
    margin-top: -27px;
    font-size: 18px;
  }
`;
