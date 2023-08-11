import styled from "styled-components";

import icon from "../../assets/navbar_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import footer_line from "../../assets/footer_line.png";
import pay_icon from "../../assets/pay_icon.png";

function Footer() {
  return (
    <Wrapper>
      <WrapperInfo>
        <Communication>
          <CommOne>
            <Header>
              <Icon src={icon}></Icon>
              <Title>Umut's Market</Title>
            </Header>
            <Info>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </Info>
          </CommOne>

          <CommTwo>
            <TitleTwo>Follow Us</TitleTwo>
            <InfoTwo>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </InfoTwo>
            <IconTwo>
              <Facebook src={facebook_icon} alt="facebook icon"></Facebook>
              <Twitter src={twitter_icon}></Twitter>
            </IconTwo>
          </CommTwo>

          <CommThree>
            <TitleThree>Contact Us</TitleThree>
            <InfoThree>Umut's Market , 16350 Yıldırım, Bursa</InfoThree>
          </CommThree>
        </Communication>

        <About>
          <Information>
            <InformationTitle>Information</InformationTitle>
            <AboutUs>About Us</AboutUs>
            <InformationP>Information</InformationP>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
            <Terms>Terms & Conditions</Terms>
          </Information>
          <Information>
            <InformationTitle>Service</InformationTitle>
            <AboutUs>About Us</AboutUs>
            <InformationP>Information</InformationP>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
            <Terms>Terms & Conditions</Terms>
          </Information>
          <Information>
            <InformationTitle>My Account</InformationTitle>
            <AboutUs>About Us</AboutUs>
            <InformationP>Information</InformationP>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
            <Terms>Terms & Conditions</Terms>
          </Information>
          <Information>
            <InformationTitle>Our Offers</InformationTitle>
            <AboutUs>About Us</AboutUs>
            <InformationP>Information</InformationP>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
            <Terms>Terms & Conditions</Terms>
          </Information>
        </About>
      </WrapperInfo>
      <Line src={footer_line}></Line>
      <Copyright>© 2018 Ecommerce theme by www.bisenbaev.com</Copyright>
      <Payment>
        <PaymentIcon src={pay_icon}></PaymentIcon>
      </Payment>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  background-color: #bcddfe;
  height: 680px;
  margin-top: 280px;
  display: flex;
`;
const WrapperInfo = styled.div`
  display: flex;
`;
const Communication = styled.div`
  margin-left: 130px;
  margin-top: 150px;
  position: absolute;
  display: flex;
`;

const CommOne = styled.div``;
const Header = styled.div`
  display: flex;
  gap: 7px;
`;
const Icon = styled.img`
  width: 39px;
  height: 39px;
`;
const Title = styled.p`
  color: #22262a;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 5px;
`;
const Info = styled.p`
  width: 221.102px;
  color: #22262a;
  font-family: "proxima-nova", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;

const CommTwo = styled.div`
  margin-left: 300px;
`;
const TitleTwo = styled.p`
  color: #22262a;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const InfoTwo = styled.p`
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
const IconTwo = styled.div`
  display: flex;
  gap: 30px;
`;
const Facebook = styled.img``;
const Twitter = styled.img``;

const CommThree = styled.div`
  margin-left: 180px;
`;
const TitleThree = styled.p`
  color: #22262a;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const InfoThree = styled.p`
  width: 148.109px;
  color: #22262a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 19px;
  font-family: "proxima-nova", sans-serif;
`;

const About = styled.div`
  margin-left: 130px;
  margin-top: 370px;
  display: flex;
  gap: 200px;
`;
const Information = styled.div``;
const InformationTitle = styled.p`
  color: #22262a;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 29px;
`;
const AboutUs = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const InformationP = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PrivacyPolicy = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Terms = styled.p`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Line = styled.img`
  width: 1150.86px;
  margin-top: 600px;
  position: absolute;
  margin-left: 150px;
`;
const Copyright = styled.p`
  position: absolute;
  margin-top: 630px;
  margin-left: 150px;
  color: #c1c8ce;
  font-family: "proxima-nova", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Payment = styled.div`
  position: absolute;
  margin-top: 630px;
  margin-left: 1070px;
  display: flex;
  gap: 20px;
`;
const PaymentIcon = styled.img``;
