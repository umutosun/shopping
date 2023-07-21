import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";

type props = {
  data: Product;
};
const ProductCard = ({ data }: props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`prodcuts/${data?.id}`)}
      className="productCard">
      <div className="price">{data.price}$</div>
      <img src={data.image} alt="" />
      <div className="title">
        <b>{data.title}</b>
      </div>
    </div>
  );
};

export default ProductCard;
