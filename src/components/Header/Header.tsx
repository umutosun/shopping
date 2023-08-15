import banner_photo from "../../assets/banner_photo.png";
import bag from "../../assets/bag.png";
import shoes from "../../assets/shoes.png";
import shoes_two from "../../assets/shoes_two.png";

import * as S from "./style";

const Header = () => {
  return (
    <S.WrapperHeader>
      <S.Image src={banner_photo}></S.Image>
      <S.Sale>Super Flash Sale 40% Off</S.Sale>
      <S.SaleProduct>
        <S.Bag>
          <S.BagTitle>FS - QUILTED MAXI CROSS BAG</S.BagTitle>
          <S.BagImage src={bag}></S.BagImage>
          <S.BagPrice>$299,43</S.BagPrice>
          <S.BagDiscount>$534,33</S.BagDiscount>
          <S.BagPercentage>24%Off</S.BagPercentage>
        </S.Bag>

        <S.Shoes>
          <S.ShoesTitle>FS - Nike Air Max 270 React...</S.ShoesTitle>
          <S.ShoesImage src={shoes}></S.ShoesImage>
          <S.ShoesPrice>$299,43</S.ShoesPrice>
          <S.ShoesDiscount>$534,33</S.ShoesDiscount>
          <S.ShoesPercentage>24%Off</S.ShoesPercentage>
        </S.Shoes>

        <S.ShoesTwo>
          <S.ShoesTwoTitle>FS - Nike Air Max 270 React...</S.ShoesTwoTitle>
          <S.ShoesTwoImage src={shoes_two}></S.ShoesTwoImage>
          <S.ShoesTwoPrice>$299,43</S.ShoesTwoPrice>
          <S.ShoesTwoDiscount>$534,33</S.ShoesTwoDiscount>
          <S.ShoesTwoPercentage>24%Off</S.ShoesTwoPercentage>
        </S.ShoesTwo>
      </S.SaleProduct>
    </S.WrapperHeader>
  );
};

export default Header;
