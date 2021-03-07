import { useState } from "react";
import { categories } from "../constants";
import Category from "./Category";

const Categories = ({ cards, setFilteredCards }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterCategories = (e, type) => {
    let isSelected = selectedCategories.some((item) => {
      return item === type;
    });

    if (isSelected) {
      setSelectedCategories(
        selectedCategories.filter((item) => {
          return item !== type;
        })
      );
    } else {
      setSelectedCategories([...selectedCategories, type]);
    }

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
          />
        );
      })}
    </ul>
  );
};

export default Categories;
