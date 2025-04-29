export async function getChat() {
  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "GET",
    });

    let result = await response.json();
    return result;
  } catch (err) {
    console.error(
      "Chat fetching has failed, the server is not accessible!",
      err
    );
  }
}
export async function createMessage(text, title, side, time) {
  try {
    await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        title: title,
        side: side,
        time: time,
      }),
    });
  } catch (err) {
    console.error("Add message has failed!", err);
  }
}
export async function deleteMessage(id) {
  try {
    await fetch(`http://localhost:3000/chat/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Message remove has failed!", err);
  }
}
