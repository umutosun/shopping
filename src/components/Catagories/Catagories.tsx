import * as S from "./style";

const Catagories = ({ category, setCategories }: any) => {
  return (
    <div>
      <div>
        <S.Category onClick={() => setCategories(category)}>
          <S.P>{category}</S.P>
        </S.Category>
      </div>
    </div>
  );
};

export default Catagories;
