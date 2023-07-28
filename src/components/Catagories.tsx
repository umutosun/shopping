import styled from "styled-components";

import { device } from "../style/device";

const Catagories = ({ category, setCategories }: any) => {
  return (
    <div>
      <div>
        <Category onClick={() => setCategories(category)}>
          <h4>{category}</h4>
        </Category>
      </div>
    </div>
  );
};

export default Catagories;

const Category = styled.div`
  cursor: pointer;
  margin-left: 15px;
  border: 1px solid #b5caca;
  padding: 10px;
  margin-top: 5px;
  &:hover {
    background-color: #1b1f1f;
    color: white;
  }
  @media ${device.mobileM} {
    margin-left: 15px;
    margin-right: 15px;
  }
`;
