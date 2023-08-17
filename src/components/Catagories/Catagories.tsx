import * as S from "./style";

const Catagories = ({ category, setCategories }: any) => {
  return (
    <S.Wrapper>
      <S.Category onClick={() => setCategories(category)}>
        <S.P>{category}</S.P>
      </S.Category>
    </S.Wrapper>
  );
};

export default Catagories;
