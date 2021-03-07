import Categories from "./Categories";

const Sidebar = ({ user, cards, setFilteredCards }) => {

  return (
    <div>
      <div>
        <i className="far fa-user fa-5x"></i>
      </div>
      <h2>{`${user.name} ${user.surname}`}</h2>
      <div>
        <Categories cards={cards} setFilteredCards={setFilteredCards} />
      </div>
    </div>
  );
};

export default Sidebar;
