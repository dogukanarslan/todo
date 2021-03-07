import Todo from "./Todo";

const TodoList = ({ card, cards, setCards, todos, setTodos }) => {
  return (
    <div className="card-todos">
      {card.todos.length > 0 ? (
        <ul>
          {card.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                card={card}
                cards={cards}
                setCards={setCards}
                todo={todo}
              />
            );
          })}
        </ul>
      ) : (
        <p className="">There are no todos...</p>
      )}
    </div>
  );
};

export default TodoList;
