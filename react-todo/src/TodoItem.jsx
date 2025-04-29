import "./TodoItem.css";
const TodoItem = (props) => {
  return (
    <div className="panel">
      <label>
        <input
          onChange={props.onToggleTodo}
          checked={props.todo.completed}
          type="checkbox"
          className="todo-checkbox"
        />
        <span></span>
      </label>
      <p className={props.todo.completed ? "completed" : ""}>
        {props.todo.title}
      </p>
      <button onClick={props.removeItem} className="todo-delete-button">
        X
      </button>
    </div>
  );
};
export default TodoItem;
