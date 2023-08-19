import { Category } from "types/product";
import * as S from "./style";

interface IProps {
  category: string;
  setCategories: (categories: string) => void;
}

const Catagories = ({ category, setCategories }: IProps) => {
  return (
    <S.Wrapper>
      <S.Category onClick={() => setCategories(category)}>
        <S.P>{category}</S.P>
      </S.Category>
    </S.Wrapper>
  );
};

export default Catagories;
