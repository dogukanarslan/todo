const Sidebar = ({ user }) => {
  return (
    <div>
      <div>
        <i className="far fa-user fa-5x"></i>
      </div>
      <h2>{`${user.name} ${user.surname}`}</h2>
    </div>
  );
};

export default Sidebar;
