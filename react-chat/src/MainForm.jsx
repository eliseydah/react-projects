import { useState } from "react";
import "./MainForm.css";
function MainForm(props) {
  const [selectedName, setSelect] = useState("Artem");
  const [newMessage, setNewMessage] = useState("");
  function sideChoise() {
    if (selectedName === "Artem") {
      return "left";
    } else {
      return "right";
    }
  }
  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }
  function messageTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    let newTime = addZero(hours) + ":" + addZero(minutes);
    return newTime;
  }
  return (
    <div className="print-section">
      <select
        value={selectedName}
        onChange={(e) => setSelect(e.target.value)}
        className="select-choice"
        name="author"
        id="author-select"
      >
        <option value="Artem" className="Artem">
          Artem
        </option>
        <option value="Daria" className="Daria">
          Daria
        </option>
      </select>
      <form
        className="message"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          props.addMessage(
            newMessage,
            selectedName,
            sideChoise(),
            messageTime()
          );
          setNewMessage("");
        }}
      >
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
          type="text"
          placeholder="Напишите что-нибудь"
          required
        />
        <button className="send-button">
          <span>Отправить</span>
        </button>
      </form>
    </div>
  );
}
export default MainForm;
