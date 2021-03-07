import { categories } from "../constants";

const Form = ({
  inputText,
  setInputText,
  title,
  setTitle,
  card,
  cards,
  setCards,
  setSelectedCategory,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return {
            ...item,
            title: e.target.value,
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      return;
    }

    //setSelectedCategory("All");

    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return {
            ...item,
            todos: [
              ...card.todos,
              { text: inputText, completed: false, id: Math.random() },
            ],
          };
        }

        return item;
      })
    );
    setInputText("");
  };

  const setCategory = (e) => {
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return {
            ...item,
            category: e.target.value,
          };
        }
        return item;
      })
    );
  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <input
        disabled={card.isSaved}
        className="card-form-title"
        type="text"
        value={card.title}
        placeholder="Title"
        onChange={titleHandler}
      />
      <select
        disabled={card.isSaved}
        value={card.category}
        onChange={setCategory}
      >
        {categories.map((category) => {
          return (
            <option key={Math.random()} value={category.type}>
              {category.type}
            </option>
          );
        })}
      </select>
      {!card.isSaved && (
        <div className="card-form-new">
          <input
            type="text"
            onChange={inputTextHandler}
            value={inputText}
            placeholder="What to do?"
          />
          <button>
            <i className="fas fa-plus square"></i>
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
