import "./CompletedCounter.css";
const CompletedCounter = (props) => {
  return (
    <div className="clear-completed">
      <button
        onClick={props.removeCompletedTodo}
        className="clear-completed-button"
        type="button"
      >
        <span id="clearElementCounter">
          {props.todos.filter((t) => t.completed).length + " "}
        </span>
        clear completed
      </button>
    </div>
  );
};
export default CompletedCounter;
