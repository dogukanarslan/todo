import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
