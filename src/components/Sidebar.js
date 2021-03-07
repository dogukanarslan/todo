import Categories from "./Categories";

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
        <p>{`${user.name} ${user.surname}`}</p>
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
