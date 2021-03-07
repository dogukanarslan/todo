import { categories } from "../constants";
import Category from "./Category";

const Categories = ({
  cards,
  setFilteredCards,
  selectedCategory,
  setSelectedCategory,
}) => {
  const filterCategories = (e, type) => {
    setSelectedCategory(type);

    if ("All" === type) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((item) => {
          return item.category === type;
        })
      );
    }
  };

  return (
    <ul className="sidebar-categories">
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            category={category}
            cards={cards}
            setFilteredCards={setFilteredCards}
            filterCategories={filterCategories}
            selectedCategory={selectedCategory}
          />
        );
      })}
    </ul>
  );
};

export default Categories;
