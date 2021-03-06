import Todo from "./Todo";

const TodoList = ({ card, cards, setCards, todos, setTodos }) => {
  return (
    <div>
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
    </div>
  );
};

export default TodoList;
