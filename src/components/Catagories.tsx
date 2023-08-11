import styled from "styled-components";

const Catagories = ({ category, setCategories }: any) => {
  return (
    <div>
      <div>
        <Category onClick={() => setCategories(category)}>
          <P>{category}</P>
        </Category>
      </div>
    </div>
  );
};

export default Catagories;

const Category = styled.div`
  cursor: pointer;
  margin-left: 15px;
  margin-top: 5px;
`;
const P = styled.p`
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
`;
