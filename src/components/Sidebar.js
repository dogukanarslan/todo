import Categories from "./Categories";

const Sidebar = ({ user }) => {
  return (
    <div>
      <div>
        <i className="far fa-user fa-5x"></i>
      </div>
      <h2>{`${user.name} ${user.surname}`}</h2>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;
