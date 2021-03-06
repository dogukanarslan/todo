const Form = ({ setInputText, setTodos, inputText, todos }) => {
  const inputTextHandler = (e) => {
    const value = e.target.value;
    if (!!value) {
      setInputText(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
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
