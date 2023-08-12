import styled from "styled-components";
import { device } from "../../style/device";

export const Wrapper = styled.div`
  gap: 20px;
`;

export const Category = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 250px;
  margin-bottom: 23px;
  width: 627px;
  gap: 60px;
  @media ${device.mobileM} {
    margin-left: 20px;
    gap: 40px;
  }
  @media ${device.tablet} {
    margin-left: 250px;
    gap: 60px;
  }
`;

export const All = styled.div`
  cursor: pointer;
  margin-top: 5px;
  color: #262626;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: #33a0ff;
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  color: #e53a40;
  color: #22262a;
  font-family: Poppins;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 520px;
  margin-top: 63px;
  @media ${device.mobileM} {
    margin-left: 50px;
  }
  @media ${device.tablet} {
    margin-left: 520px;
  }
`;

export const WrapperProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-left: 100px;
  margin-bottom: 50px;
  margin-top: 40px;
  @media ${device.mobileM} {
    column-gap: 150px;
    margin-left: 0;
  }
  @media ${device.tablet} {
    margin-top: 40px;
    gap: 40px;
    margin-left: 100px;
  }

  @media ${device.laptopL} {
    margin-left: 150px;
  }
`;

export const Input = styled.input`
  position: absolute;
  height: 43.3px;
  margin-left: 930px;
  width: 230px;
  border: 1px solid #bcddfe;
  margin-top: 170px;
  &:focus {
    outline: none;
    border-color: #e53a40;
  }
  @media ${device.mobileM} {
    margin-left: 350px;
    margin-top: 70px;
  }
  @media ${device.tablet} {
    margin-left: 930px;
    margin-top: 170px;
  }
`;

export const Search = styled.p`
  position: absolute;
  margin-left: 1160px;
  padding: 10px;
  border: 1px solid #bcddfe;
  margin-top: 170px;
  background-color: #40bfff;
  color: #fff;
  @media ${device.mobileM} {
    margin-left: 510px;
    margin-top: 70px;
  }
  @media ${device.tablet} {
    margin-left: 1160px;
    margin-top: 170px;
  }
`;
export const Sneakers = styled.div`
  background-color: #40bfff;
  height: 550px;
  margin-top: 149px;
  display: flex;
  justify-content: space-between;
  @media ${device.mobileM} {
    width: 625px;
    gap: 25px;
    height: 450px;
  }
  @media ${device.tablet} {
    width: 100%;
    gap: 0;
    height: 550px;
  }
`;

export const Info = styled.div`
  margin-left: 110px;
  margin-top: 140px;
  @media ${device.mobileM} {
    margin-left: 10px;
    margin-top: 40px;
  }
  @media ${device.tablet} {
    margin-left: 110px;
    margin-top: 140px;
  }
`;

export const P1 = styled.p`
  color: #fff;
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 55px;
  }
`;

export const P2 = styled.p`
  color: #fff;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 23px;
  margin-bottom: 12px;
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 23px;
  }
`;

export const P3 = styled.p`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const Underline = styled.img`
  position: absolute;
`;

export const Image = styled.img`
  margin-top: -60px;
  width: 700.564px;
  height: 502.935px;
  @media ${device.mobileM} {
    width: 600.564px;
    height: 402.935px;
  }
  @media ${device.tablet} {
    width: 700.564px;
    height: 502.935px;
  }
`;

export const Article = styled.div`
  margin-top: 100px;
  margin-left: 220px;
  display: flex;
  gap: 200px;
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 200px;
  }
`;

export const Shipping = styled.div``;
export const CarIcon = styled.img`
  margin-bottom: 50px;
  margin-left: 50px;
  @media ${device.mobileM} {
    margin-bottom: 30px;
    margin-left: 40px;
  }
  @media ${device.tablet} {
    margin-bottom: 50px;
    margin-left: 50px;
  }
`;
export const ShippingTitle = styled.p`
  color: #22262a;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  @media ${device.mobileM} {
    text-align: center;
    margin-left: 30px;
  }
  @media ${device.tablet} {
    text-align: center;
    margin-left: 0px;
  }
`;
export const ShippingP = styled.p`
  width: 190.555px;
  height: 89.318px;
  color: #22262a;
  text-align: center;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Refund = styled.div``;
export const RefundIcon = styled.img`
  margin-bottom: 38px;
  margin-left: 50px;
  @media ${device.mobileM} {
    margin-bottom: 25px;
    margin-left: 55px;
  }
  @media ${device.tablet} {
    margin-bottom: 38px;
    margin-left: 50px;
  }
`;
export const RefundTitle = styled.p`
  color: #22262a;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  @media ${device.mobileM} {
    text-align: center;
    margin-left: 25px;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
export const RefundP = styled.p`
  width: 190.555px;
  height: 89.318px;
  color: #22262a;
  text-align: center;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Support = styled.div``;
export const SupportIcon = styled.img`
  margin-bottom: 30px;
  margin-left: 50px;
  @media ${device.mobileM} {
    margin-bottom: 25px;
    margin-left: 55px;
  }
  @media ${device.tablet} {
    margin-bottom: 30px;
    margin-left: 50px;
  }
`;
export const SupportTitle = styled.p`
  color: #22262a;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  @media ${device.mobileM} {
    text-align: center;
    margin-left: 25px;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
export const SupportP = styled.p`
  width: 190.555px;
  height: 89.318px;
  color: #22262a;
  text-align: center;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ArticleTwo = styled.div`
  margin-top: 120px;
  margin-left: 100px;
`;
export const ArticleTitle = styled.p`
  color: #22262a;
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-bottom: 70px;
  @media ${device.mobileM} {
    margin-left: 150px;
    text-align: start;
  }
  @media ${device.tablet} {
    margin-left: -60px;
    text-align: center;
  }
`;
export const ArticleInfo = styled.div`
  display: flex;
  gap: 50px;
  @media ${device.mobileM} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Industry = styled.div`
  display: flex;
  gap: 30px;
`;
export const IndustryIcon = styled.img`
  width: 144.904px;
  height: 52.181px;
  margin-top: 45px;
`;
export const IndustryInfo = styled.div``;
export const IndustryInfoP1 = styled.p`
  color: #c1c8ce;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const IndustryInfoP2 = styled.p`
  color: #22262a;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const IndustryInfoP3 = styled.p`
  color: #22262a;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 190.555px;
  height: 89.318px;
`;

export const Tools = styled.div`
  display: flex;
  gap: 5px;
  @media ${device.mobileM} {
    gap: 50px;
  }
  @media ${device.tablet} {
    gap: 5px;
  }
`;
export const ToolsIcon = styled.img`
  width: 116.955px;
  height: 87.716px;
  margin-top: 25px;
`;
export const ToolsInfo = styled.div``;
export const ToolsInfoP1 = styled.p`
  color: #c1c8ce;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ToolsInfoP2 = styled.p`
  color: #22262a;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ToolsInfoP3 = styled.p`
  color: #22262a;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 190.555px;
  height: 89.318px;
`;

export const Community = styled.div`
  display: flex;
  gap: 15px;
`;

export const CommunityIcon = styled.img`
  width: 153.146px;
  height: 82.642px;
  margin-top: 35px;
`;

export const CommunityInfo = styled.div``;

export const CommunityInfoP1 = styled.p`
  color: #c1c8ce;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommunityInfoP2 = styled.p`
  color: #22262a;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CommunityInfoP3 = styled.p`
  color: #22262a;
  font-family: "proxima-nova", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 190.555px;
  height: 89.318px;
`;

export const ArticleThree = styled.div`
  margin-top: 110px;
  margin-bottom: 128px;
`;

export const ArticleThreeTitle = styled.p`
  text-align: center;
  color: #22262a;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 70px;
  @media ${device.mobileM} {
    margin-left: 220px;
  }
  @media ${device.tablet} {
    margin-left: 0px;
  }
`;

export const ArticleProduct = styled.div`
  margin-left: 100px;
  display: flex;
  @media ${device.mobileM} {
    flex-direction: column;
    gap: 50px;
    margin-left: 130px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 0px;
    margin-left: 100px;
  }
`;

export const ProductOne = styled.div`
  display: flex;
  gap: 15px;
`;

export const ImageOne = styled.img`
  width: 152px;
  height: 152px;
`;

export const ProductOneInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OneTitle = styled.p`
  color: #262626;
  font-family: "proxima-nova", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 230.292px;
`;

export const OneRate = styled.img`
  width: 86.018px;
  height: 11.878px;
`;

export const ProductPrice = styled.div`
  display: flex;
  gap: 4px;
`;

export const OnePrice = styled.p`
  color: #ff4858;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const OneDiscount = styled.p`
  color: #c1c8ce;
  font-family: "proxima-nova", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;
`;
