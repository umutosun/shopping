import { useAppSelector } from "../store";
import Loading from "./Loading";

const Catagories = ({ category, setCategories }: any) => {
  const loading = useAppSelector((state) => state.category);
  return (
    <div>
      {loading.loading == false ? (
        <Loading />
      ) : (
        <div className="category" onClick={() => setCategories(category)}>
          <h4>{category}</h4>
        </div>
      )}
    </div>
  );
};

export default Catagories;
