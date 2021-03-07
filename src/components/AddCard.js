const AddCard = ({ cards, setCards }) => {
  const handleClick = () => {
    setCards([...cards, { id: Math.random(), title: "", todos: [], category: "" }]);
  };
  return (
    <button onClick={handleClick}>
      <i className="fas fa-plus"></i>Add
    </button>
  );
};

export default AddCard;
