const Counter = (props) => {
  return (
    <div className="counter">
      <span id="elementCounter">
        {props.todos.filter((t) => !t.completed).length + " "}
      </span>
      item left
    </div>
  );
};
export default Counter;
