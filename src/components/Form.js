const Form = ({ inputText, setInputText, card, cards, setCards }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
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
      <input type="text" onChange={inputTextHandler} value={inputText} />
      <button>
        <i className="fas fa-plus square"></i>
      </button>
    </form>
  );
};

export default Form;
