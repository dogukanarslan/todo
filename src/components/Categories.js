import { categories } from "../constants";
import Category from "./Category";

const Categories = () => {
  return (
    <ul>
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </ul>
  );
};

export default Categories;
