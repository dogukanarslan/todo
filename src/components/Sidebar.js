import Categories from "./Categories";
import {characterLimit} from "../constants";
const Sidebar = ({
  user,
  cards,
  setFilteredCards,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-info">
        <div className="sidebar-info-image">
          <i className=" far fa-user fa-5x"></i>
        </div>
        <div>
          <p>
            {user.name &&
              (user.name.length < characterLimit
                ? user.name
                : user.name.substr(0, characterLimit) + "...")}
          </p>
          <p>
            {user.surname &&
              (user.surname.length < characterLimit
                ? user.surname
                : user.surname.substr(0, characterLimit) + "...")}
          </p>
        </div>
      </div>
      <Categories
        cards={cards}
        setFilteredCards={setFilteredCards}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Sidebar;
