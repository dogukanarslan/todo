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
    <div>
      <button onClick={filterCategories}>
        <i className="far fa-square"></i>
      </button>
      <li>{category.type}</li>
    </div>
  );
};

export default Category;
