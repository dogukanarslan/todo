import { categories } from "../constants";
import Category from "./Category";

const Categories = ({ cards, setFilteredCards }) => {

  return (
    <ul>
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            category={category}
            cards={cards}
            setFilteredCards={setFilteredCards}
          />
        );
      })}
    </ul>
  );
};

export default Categories;
