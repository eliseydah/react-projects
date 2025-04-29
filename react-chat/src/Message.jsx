import "./Message.css";
function Message(props) {
  return (
    <div className="chat-message">
      <div className={props.message.side}>
        <div className="top-message">
          <span className="author-name"> {props.message.title}</span>
          <span className="time"> {props.message.time} </span>
          <button
            className="delete-button"
            type="button"
            onClick={() => {
              props.removeMessage(props.message);
            }}
          >
            X
          </button>
        </div>
        <div>
          <p className="chat-message-text"> {props.message.text}</p>
        </div>
      </div>
    </div>
  );
}
export default Message;
