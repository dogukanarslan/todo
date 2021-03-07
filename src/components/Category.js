const Category = ({ category, filterCategories }) => {
  return (
    <div className="sidebar-categories-category">
      <li>{category.type}</li>
      <button onClick={(e, type) => filterCategories(e, category.type)}>
        <i className="far fa-square"></i>
      </button>
    </div>
  );
};

export default Category;
