import styled from "styled-components";
import { device } from "../../style/device";

export const Category = styled.div`
  cursor: pointer;
  margin-left: 15px;
  margin-top: 5px;
  @media ${device.mobileM} {
    margin-left: 0;
  }
  @media ${device.tablet} {
    margin-left: 15px;
  }
`;
export const P = styled.p`
  color: #262626;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: #33a0ff;
    text-decoration: underline;
  }
  text-transform: capitalize;
  @media ${device.mobileM} {
    font-size: 11.3px;
  }
  @media ${device.tablet} {
    font-size: 17px;
  }
`;
