const AddCard = ({ cards, setCards }) => {
  const handleClick = () => {
    setCards([
      ...cards,
      { id: Math.random(), title: "", todos: [], category: "" },
    ]);
  };
  return (
    <div className="card card-add">
      <h1 className="card-add-title">New Project</h1>
      <button className="card-add-button" onClick={handleClick}>
        <i className="fas fa-plus"></i> CREATE
      </button>
    </div>
  );
};

export default AddCard;
