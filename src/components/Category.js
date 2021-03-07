const Category = ({ category, filterCategories, selectedCategory }) => {
  return (
    <div className="sidebar-categories-category">
      <li>{category.type}</li>
      <button onClick={(e, type) => filterCategories(e, category.type)}>
        <i className={selectedCategory === category.type ? "far fa-check-square" : "far fa-square"}></i>
      </button>
    </div>
  );
};

export default Category;
