import { Toast } from "toaster-js";

const Todo = ({ card, cards, setCards, todo }) => {
  const handleClick = () => {
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return {
            ...item,
            todos: item.todos.filter((el) => el.id !== todo.id),
          };
        }

        return item;
      })
    );
    new Toast("Todo deleted!", Toast.TYPE_ERROR);
  };

  const handleComplete = () => {
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return {
            ...item,
            todos: item.todos.map((el) => {
              if (el.id === todo.id) {
                return { ...el, completed: !el.completed };
              }

              return el;
            }),
          };
        }

        return item;
      })
    );
  };

  return (
    <div className="card-todos-todo">
      <li className={todo.completed ? "card-todos-todo-completed" : ""}>
        {todo.text}
      </li>
      <div className="card-todos-todo-buttons">
        <button disabled={card.isSaved} onClick={handleComplete}>
          <i
            className={todo.completed ? "far fa-check-square" : "far fa-square"}
          ></i>
        </button>
        <button disabled={card.isSaved} onClick={handleClick}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
