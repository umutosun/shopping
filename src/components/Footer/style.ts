import styled from "styled-components";
import { device } from "../../style/device";

export const Wrapper = styled.div`
  background-color: #bcddfe;
  height: 680px;
  margin-top: 280px;
  display: flex;
  @media ${device.mobileM} {
    width: 100%;
    margin-top: 180px;
    height: 980px;
  }
  @media ${device.tablet} {
    width: 100%;
    margin-top: 280px;
    height: 680px;
  }
`;
export const WrapperInfo = styled.div`
  display: flex;
`;
export const Communication = styled.div`
  margin-left: 130px;
  margin-top: 150px;
  position: absolute;
  display: flex;
  @media ${device.mobileM} {
    flex-direction: column;
    margin-left: 10px;
    margin-top: 50px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    margin-left: 130px;
    margin-top: 150px;
  }
`;

export const CommOne = styled.div``;
export const Header = styled.div`
  display: flex;
  gap: 7px;
`;
export const Icon = styled.img`
  width: 39px;
  height: 39px;
`;
export const Title = styled.p`
  color: #22262a;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 5px;
`;
export const Info = styled.p`
  width: 221.102px;
  color: #22262a;
  font-family: "proxima-nova", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;

export const CommTwo = styled.div`
  margin-left: 300px;
  @media ${device.mobileM} {
    margin-left: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media ${device.tablet} {
    margin-left: 300px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const TitleTwo = styled.p`
  color: #22262a;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${device.mobileM} {
    margin-top: 5px;
  }
`;
export const InfoTwo = styled.p`
  color: #22262a;
  font-family: "proxima-nova", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 198px;
  margin-top: 19px;
  margin-bottom: 24px;
`;
export const IconTwo = styled.div`
  display: flex;
  gap: 30px;
`;
export const Facebook = styled.img``;
export const Twitter = styled.img``;

export const CommThree = styled.div`
  margin-left: 180px;
  @media ${device.mobileM} {
    margin-left: 0px;
  }
  @media ${device.tablet} {
    margin-left: 180px;
  }
`;

export const TitleThree = styled.p`
  color: #22262a;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const InfoThree = styled.p`
  width: 148.109px;
  color: #22262a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 19px;
  font-family: "proxima-nova", sans-serif;
`;

export const About = styled.div`
  margin-left: 130px;
  margin-top: 370px;
  display: flex;
  gap: 200px;
  height: 50px;
  @media ${device.mobileM} {
    margin-left: 10px;
    gap: 30px;
    margin-top: 450px;
    flex-wrap: wrap;
  }
  @media ${device.tablet} {
    margin-left: 130px;
    gap: 200px;
    margin-top: 370px;
  }
`;
export const Information = styled.div``;
export const InformationTitle = styled.p`
  color: #22262a;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 29px;
  @media ${device.mobileM} {
    margin-bottom: 15px;
  }
  @media ${device.tablet} {
    margin-bottom: 29px;
  }
`;
export const AboutUs = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const InformationP = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const PrivacyPolicy = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Terms = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Line = styled.img`
  width: 1150.86px;
  margin-top: 600px;
  position: absolute;
  margin-left: 150px;
  @media ${device.mobileM} {
    margin-left: 10px;
    width: 300px;
    margin-top: 820px;
  }
  @media ${device.tablet} {
    margin-left: 150px;
    width: 1150.86px;
    margin-top: 600px;
  }
`;
export const Copyright = styled.p`
  position: absolute;
  margin-top: 630px;
  margin-left: 150px;
  color: #c1c8ce;
  font-family: "proxima-nova", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media ${device.mobileM} {
    margin-left: 10px;
    margin-top: 800px;
  }
  @media ${device.tablet} {
    margin-left: 150px;
    margin-top: 630px;
  }
`;
export const Payment = styled.div`
  position: absolute;
  margin-top: 630px;
  margin-left: 1070px;
  display: flex;
  gap: 20px;
  @media ${device.mobileM} {
    margin-left: 60px;
    margin-top: 830px;
  }
  @media ${device.tablet} {
    margin-top: 630px;
    margin-left: 1070px;
  }
`;
export const PaymentIcon = styled.img``;
