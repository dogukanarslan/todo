import { Toast } from "toaster-js";

const AddCard = ({ cards, setCards, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory("All");
    setCards([
      ...cards,
      { id: Math.random(), title: "", todos: [], category: "All", isSaved: false },
    ]);
    new Toast("Card added!", Toast.TYPE_DONE);
  };
  return (
    <div className="card card-add">
      <h1 className="card-add-title">New Project</h1>
      <button className="card-add-button btn btn-dark" onClick={handleClick}>
        <i className="fas fa-plus"></i> CREATE
      </button>
    </div>
  );
};

export default AddCard;
