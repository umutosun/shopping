import { useAppSelector } from "../store";
import Loading from "./Loading";

import styled from "styled-components";

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
  border: 1px solid #30a9de;
  padding: 10px;
  margin-top: 5px;
  &:hover {
    background-color: #e53a40;
    color: white;
  }
`;
