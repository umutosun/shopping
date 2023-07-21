import { SlBasket } from "react-icons/sl";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.basket);
  console.log(products, "carts");

  return (
    <div className="header">
      <h1 onClick={() => navigate("/")}> Hepsi Orada</h1>
      <div className="input">
        <input type="text" placeholder="Arama Yapınız..." />
        <div className="search">
          <ImSearch size={25} />
        </div>
      </div>

      <div className="basket">
        <div className="count">{products?.length}</div>
        <SlBasket size={50} onClick={() => navigate("cart")} />
      </div>
    </div>
  );
}

export default Header;
