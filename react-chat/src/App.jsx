import { useState, useEffect } from "react";
import Message from "./message";
import MainForm from "./MainForm";
import { getChat, createMessage, deleteMessage } from "./api";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    const result = await getChat();

    setMessages(result);
  }
  async function addMessage(text, title, side, time) {
    await createMessage(text, title, side, time);
    await fetchMessages();
  }
  async function removeMessage(message) {
    console.log(message);
    await deleteMessage(message.id);
    await fetchMessages();
  }
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <div className="container">
      <div className="chat">
        {messages.map((item) => (
          <Message
            message={item}
            key={item.id}
            removeMessage={() => {
              removeMessage(item);
            }}
          />
        ))}
      </div>
      <MainForm addMessage={addMessage} />
    </div>
  );
}

export default App;
