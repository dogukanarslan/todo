import { categories } from "../constants";

const Form = ({
  inputText,
  setInputText,
  title,
  setTitle,
  card,
  cards,
  setCards,
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={titleHandler}
      />
      <select value={card.category} onChange={setCategory}>
        {categories.map((category) => {
          return (
            <option key={Math.random()} value={category.type}>
              {category.type}
            </option>
          );
        })}
      </select>
      <input type="text" onChange={inputTextHandler} value={inputText} />
      <button>
        <i className="fas fa-plus square"></i>
      </button>
    </form>
  );
};

export default Form;
