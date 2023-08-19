import styled from "styled-components";
import { device } from "../../style/device";

export const WrapperProduct = styled.div`
  display: flex;

  @media ${device.mobileM} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 300px;
  margin: 90px;
  height: 450px;
  @media ${device.mobileM} {
    width: 200px;
    margin-top: 40px;
    margin-left: 110px;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    width: 300px;
    margin: 90px;
  }
`;

export const Info = styled.div`
  margin-top: 90px;
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.mobileM} {
    margin-left: 20px;
    margin-top: 30px;
    margin-right: 15px;
  }

  @media ${device.tablet} {
    margin-left: -50px;
    margin-top: 90px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;

  @media ${device.mobileM} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 50px;
  }
`;

export const Description = styled.p``;

export const Count = styled.h4`
  color: #e53a40;
`;

export const Rating = styled.h4`
  color: #e53a40;
`;

export const Price = styled.h2`
  color: #285b5c;
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #e53a40;
  border: 0px solid #e53a40;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #285b5c;
  }

  @media ${device.mobileM} {
    margin-bottom: 25px;
  }
`;
