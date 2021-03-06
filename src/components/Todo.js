const Todo = ({ todo, todos, setTodos }) => {
  const handleClick = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li>{todo.text}</li>
      <button onClick={handleComplete}>
        <i
          className={todo.completed ? "far fa-check-square" : "far fa-square"}
        ></i>
      </button>
      <button onClick={handleClick}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
