const Category = ({ category, cards, setFilteredCards }) => {
  const filterCategories = () => {
    if ("Everything" === category.type) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((item) => {
          return item.category === category.type;
        })
      );
    }
  };

  return (
    <div className="sidebar-categories-category">
      <li>{category.type}</li>
      <button onClick={filterCategories}>
        <i className="far fa-square"></i>
      </button>
    </div>
  );
};

export default Category;
