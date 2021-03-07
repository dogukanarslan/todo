const Category = ({ category, filterCategories, selectedCategory, cards }) => {
  let categoryCount = 0;
  cards.forEach((card) => {
    if (card.category === category.type) {
      categoryCount++;
    }
  });
  return (
    <div
      className="sidebar-categories-category"
      onClick={(e, type) => filterCategories(e, category.type)}
    >
      <li>
        {category.type} {("All" !== category.type) && `(${categoryCount})`}
      </li>
      <button>
        <i
          className={
            selectedCategory === category.type
              ? "far fa-check-square"
              : "far fa-square"
          }
        ></i>
      </button>
    </div>
  );
};

export default Category;
