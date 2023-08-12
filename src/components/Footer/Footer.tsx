import icon from "../../assets/navbar_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import footer_line from "../../assets/footer_line.png";
import pay_icon from "../../assets/pay_icon.png";
import * as S from "./style";

function Footer() {
  return (
    <S.Wrapper>
      <S.WrapperInfo>
        <S.Communication>
          <S.CommOne>
            <S.Header>
              <S.Icon src={icon}></S.Icon>
              <S.Title>Umut's Market</S.Title>
            </S.Header>
            <S.Info>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </S.Info>
          </S.CommOne>

          <S.CommTwo>
            <S.TitleTwo>Follow Us</S.TitleTwo>
            <S.InfoTwo>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </S.InfoTwo>
            <S.IconTwo>
              <S.Facebook src={facebook_icon} alt="facebook icon"></S.Facebook>
              <S.Twitter src={twitter_icon}></S.Twitter>
            </S.IconTwo>
          </S.CommTwo>

          <S.CommThree>
            <S.TitleThree>Contact Us</S.TitleThree>
            <S.InfoThree>Umut's Market , 16350 Yıldırım, Bursa</S.InfoThree>
          </S.CommThree>
        </S.Communication>

        <S.About>
          <S.Information>
            <S.InformationTitle>Information</S.InformationTitle>
            <S.AboutUs>About Us</S.AboutUs>
            <S.InformationP>Information</S.InformationP>
            <S.PrivacyPolicy>Privacy Policy</S.PrivacyPolicy>
            <S.Terms>Terms & Conditions</S.Terms>
          </S.Information>
          <S.Information>
            <S.InformationTitle>Service</S.InformationTitle>
            <S.AboutUs>About Us</S.AboutUs>
            <S.InformationP>Information</S.InformationP>
            <S.PrivacyPolicy>Privacy Policy</S.PrivacyPolicy>
            <S.Terms>Terms & Conditions</S.Terms>
          </S.Information>
          <S.Information>
            <S.InformationTitle>My Account</S.InformationTitle>
            <S.AboutUs>About Us</S.AboutUs>
            <S.InformationP>Information</S.InformationP>
            <S.PrivacyPolicy>Privacy Policy</S.PrivacyPolicy>
            <S.Terms>Terms & Conditions</S.Terms>
          </S.Information>
          <S.Information>
            <S.InformationTitle>Our Offers</S.InformationTitle>
            <S.AboutUs>About Us</S.AboutUs>
            <S.InformationP>Information</S.InformationP>
            <S.PrivacyPolicy>Privacy Policy</S.PrivacyPolicy>
            <S.Terms>Terms & Conditions</S.Terms>
          </S.Information>
        </S.About>
      </S.WrapperInfo>
      <S.Line src={footer_line}></S.Line>
      <S.Copyright>© 2018 Ecommerce theme by www.bisenbaev.com</S.Copyright>
      <S.Payment>
        <S.PaymentIcon src={pay_icon}></S.PaymentIcon>
      </S.Payment>
    </S.Wrapper>
  );
}

export default Footer;
