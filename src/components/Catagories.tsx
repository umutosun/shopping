import { useAppSelector } from "../store";
import Loading from "./Loading";

import styled from "styled-components";
import { device } from "../style/device";
const Catagories = ({ category, setCategories }: any) => {
  const loading = useAppSelector((state) => state.category);
  return (
    <div>
      {loading.loading == false ? (
        <Loading />
      ) : (
        <Category onClick={() => setCategories(category)}>
          <h4>{category}</h4>
        </Category>
      )}
    </div>
  );
};

export default Catagories;

const Category = styled.div`
  cursor: pointer;
  margin-left: 15px;
  border: 1px solid #1b1f1f;
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
