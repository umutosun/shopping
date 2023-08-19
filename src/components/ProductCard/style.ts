import styled from "styled-components";
import { device } from "../../style/device";

export const Wrapper = styled.div`
  border: 1px solid #b5caca;
  border-radius: 8px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  width: 250px;
  margin-top: 5px;
  position: relative;
  left: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 80px;
  height: 370px;
  @media ${device.mobileM} {
    left: 80px;
  }

  @media ${device.tablet} {
    left: 5px;
  }
`;

export const Image = styled.img`
  width: 50%;
  display: block;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  cursor: pointer;
  &:hover {
    transition: 0.3s, background-size 0.3s 0.3s;
    width: 60%;
    @media ${device.desktop} {
      width: 70%;
    }
  }

  @media ${device.desktop} {
    width: 60%;
  }
`;

export const Info = styled.div`
  border: 1px #b5caca;
  height: 60px;
`;

export const Price = styled.p`
  position: absolute;
  padding: 5px;
  color: var(--primary-blue, #40bfff);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 32.4px */
  letter-spacing: 0.5px;
  margin-top: 25px;
  margin-left: 85px;
`;

export const Title = styled.p`
  color: var(--neutral-dark, #223263);
  font-family: Poppins;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.5px;
`;

export const Rate = styled.img`
  position: absolute;
  margin-left: 60px;
  margin-top: 10px;
`;
