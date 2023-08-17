import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperHeader = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 653.734px;

  @media ${device.mobileM} {
    height: 353.734px;
  }

  @media ${device.tablet}, ${device.desktop} {
    height: 653.734px;
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
    font-size: 24px;
    width: 220.169px;
    height: 28.49px;
    margin-top: -250px;
  }

  @media ${device.tablet} {
    margin-left: 40px;
    font-size: 54px;
    width: 573.169px;
    height: 228.49px;
    margin-top: -420px;
  }

  @media ${device.laptop} {
    margin-left: 40px;
    font-size: 64px;
    width: 573.169px;
    height: 228.49px;
    margin-top: -410px;
  }

  @media ${device.desktop} {
    margin-left: 80px;
    font-size: 72px;
    width: 673.169px;
    height: 228.49px;
    margin-top: -410px;
  }
`;

export const SaleProduct = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: -95px;
  gap: 0;

  @media ${device.mobileM} {
    gap: 0px;
    margin-left: 10px;
  }

  @media ${device.tablet} {
    margin-left: 80px;
    gap: 0;
  }

  @media ${device.laptop} {
    margin-left: 40px;
    gap: 0;
  }

  @media ${device.desktop} {
    margin-left: 110px;
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
    font-size: 8px;
    margin-top: 2px;
    margin-left: 0;
    width: 102.181px;
    height: 58.08px;
  }

  @media ${device.tablet} {
    font-size: 12px;
    margin-top: 6px;
    margin-left: 12px;
    width: 152.181px;
    height: 58.08px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 29px;
    margin-left: 52px;
    width: 202.181px;
    height: 58.08px;
  }

  @media ${device.desktop} {
    font-size: 28px;
    margin-top: 25px;
    margin-left: 52px;
    width: 302.181px;
    height: 58.08px;
  }
`;

export const BagImage = styled.img`
  height: 358.315px;

  @media ${device.mobileM} {
    height: 100px;
    margin-top: 2px;
  }

  @media ${device.tablet} {
    height: 170.315px;
    margin-top: 0;
  }

  @media ${device.laptop} {
    height: 358.315px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    height: 458.315px;
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
    margin-left: 70px;
    font-size: 11px;
    margin-top: -22px;
  }

  @media ${device.tablet} {
    margin-left: 120px;
    font-size: 18px;
    margin-top: -35px;
  }

  @media ${device.laptop} {
    margin-left: 277px;
    font-size: 30px;
    margin-top: -90px;
  }

  @media ${device.desktop} {
    margin-left: 357px;
    font-size: 36px;
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
    margin-top: -30px;
    margin-left: 5px;
    font-size: 9px;
  }

  @media ${device.tablet} {
    margin-top: -50px;
    margin-left: 15px;
    font-size: 14px;
  }

  @media ${device.laptop} {
    margin-top: -100px;
    margin-left: 52px;
    font-size: 18px;
  }

  @media ${device.desktop} {
    margin-top: -110px;
    margin-left: 52px;
    font-size: 28px;
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
    margin-top: -13px;
    margin-left: 50px;
    font-size: 9px;
  }

  @media ${device.tablet} {
    margin-left: 83px;
    margin-top: -22px;
    font-size: 15px;
  }

  @media ${device.laptop} {
    margin-left: 133px;
    margin-top: -27px;
    font-size: 18px;
  }

  @media ${device.desktop} {
    font-size: 28px;
    margin-left: 175px;
    margin-top: -40px;
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
    font-size: 8px;
    margin-top: 2px;
    margin-left: 0;
    width: 100.237px;
    height: 57.468px;
  }

  @media ${device.tablet} {
    font-size: 12px;
    margin-top: 6px;
    margin-left: 12px;
    width: 108.237px;
    height: 57.468px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 29px;
    margin-left: 52px;
    width: 178.237px;
    height: 57.468px;
  }

  @media ${device.desktop} {
    font-size: 29px;
    margin-top: 25px;
    margin-left: 52px;
    width: 302.181px;
    height: 58.08px;
  }
`;
export const ShoesImage = styled.img`
  margin-left: -2px;
  height: 358.315px;

  @media ${device.mobileM} {
    height: 100px;
  }

  @media ${device.tablet} {
    height: 170.315px;
    margin-top: 0;
  }

  @media ${device.laptop} {
    height: 358.315px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    height: 458.315px;
    margin-top: 0;
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
    margin-left: 73px;
    margin-top: -95px;
    font-size: 11px;
  }

  @media ${device.tablet} {
    margin-left: 130px;
    margin-top: -172px;
    font-size: 18px;
  }

  @media ${device.laptop} {
    margin-left: 277px;
    margin-top: -340px;
    font-size: 30px;
  }

  @media ${device.desktop} {
    margin-left: 380px;
    margin-top: -430px;
    font-size: 36px;
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
    margin-top: -20px;
    margin-left: 17px;
    font-size: 9px;
  }

  @media ${device.tablet} {
    margin-top: -30px;
    margin-left: 50px;
    font-size: 14px;
  }

  @media ${device.laptop} {
    margin-top: -60px;
    margin-left: 145px;
    font-size: 18px;
  }

  @media ${device.desktop} {
    margin-top: -65px;
    margin-left: 145px;
    font-size: 28px;
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
    font-size: 9px;
    margin-left: 60px;
    margin-top: -13px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    margin-left: 115px;
    margin-top: -21px;
  }

  @media ${device.laptop} {
    font-size: 18px;
    margin-left: 223px;
    margin-top: -27px;
  }

  @media ${device.desktop} {
    font-size: 28px;
    margin-left: 265px;
    margin-top: -44px;
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
    font-size: 8px;
    margin-top: 2px;
    margin-left: 0;
    width: 100px;
  }

  @media ${device.tablet} {
    font-size: 12px;
    margin-top: 6px;
    margin-left: 12px;
    width: 128.237px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 29px;
    margin-left: 52px;
    width: 202.181px;
  }

  @media ${device.desktop} {
    font-size: 29px;
    margin-top: 25px;
    margin-left: 52px;
    width: 302.181px;
    height: 58.08px;
  }
`;
export const ShoesTwoImage = styled.img`
  margin-left: -2px;
  height: 358.315px;

  @media ${device.mobileM} {
    height: 100px;
  }

  @media ${device.tablet} {
    height: 170.315px;
    margin-top: 0;
  }

  @media ${device.laptop} {
    height: 358.315px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    height: 458.315px;
    margin-top: 0;
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
    margin-left: 65px;
    font-size: 10px;
    margin-top: -25px;
    width: 40.818px;
  }

  @media ${device.tablet} {
    margin-left: 100px;
    font-size: 18px;
    margin-top: -40px;
    width: 117.818px;
  }

  @media ${device.laptop} {
    margin-left: 255px;
    font-size: 30px;
    margin-top: -70px;
    width: 117.818px;
  }

  @media ${device.desktop} {
    margin-left: 350px;
    margin-top: -70px;
    font-size: 36px;
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
    margin-top: -82px;
    margin-left: 5px;
    font-size: 9px;
  }

  @media ${device.tablet} {
    margin-top: -130px;
    margin-left: 13px;
    font-size: 14px;
  }

  @media ${device.laptop} {
    margin-top: -260px;
    margin-left: 52px;
    font-size: 18px;
  }

  @media ${device.desktop} {
    margin-top: -330px;
    margin-left: 52px;
    font-size: 28px;
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
    margin-top: -13px;
    margin-left: 50px;
    font-size: 9px;
  }

  @media ${device.tablet} {
    margin-left: 80px;
    margin-top: -22px;
    font-size: 14px;
  }

  @media ${device.laptop} {
    margin-left: 130px;
    margin-top: -27px;
    font-size: 18px;
  }

  @media ${device.desktop} {
    font-size: 28px;
    margin-left: 185px;
    margin-top: -45px;
  }
`;
