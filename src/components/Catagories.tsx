const Catagories = ({ category, setCategories }: any) => {
  return (
    <div className="category" onClick={() => setCategories(category)}>
      <h4>{category}</h4>
    </div>
  );
};

export default Catagories;
