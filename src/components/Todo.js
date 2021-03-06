const Todo = ({ todo }) => {
  return (
    <div>
      <li>{todo.text}</li>
      <button>
        <i className="fas fa-check"></i>
      </button>
      <button>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
