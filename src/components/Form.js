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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={titleHandler}
      />
      <input type="text" onChange={inputTextHandler} value={inputText} />
      <button>
        <i className="fas fa-plus square"></i>
      </button>
    </form>
  );
};

export default Form;
