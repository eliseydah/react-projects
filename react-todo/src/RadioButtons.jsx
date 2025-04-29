import "./RadioButtons.css";
const RadioButtons = (props) => {
  return (
    <div className="multi-buttons">
      <input
        className="all-button"
        id="radio-1"
        type="radio"
        name="button-type"
        value="all"
        // checked
        onChange={() => {
          props.changeFilterValue("All");
        }}
      />
      <label htmlFor="radio-1"> All </label>
      <input
        className="active-button"
        id="radio-2"
        type="radio"
        name="button-type"
        value="active"
        onChange={() => {
          props.changeFilterValue("Active");
        }}
      />
      <label htmlFor="radio-2">Active</label>
      <input
        className="completed-button"
        id="radio-3"
        type="radio"
        name="button-type"
        value="completed"
        onChange={() => {
          props.changeFilterValue("Completed");
        }}
      />
      <label htmlFor="radio-3">Completed</label>
    </div>
  );
};
export default RadioButtons;
