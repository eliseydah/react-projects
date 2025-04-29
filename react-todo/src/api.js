export async function getTodos() {
  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "GET",
    });

    const todosJson = await response.json();
    return todosJson;
  } catch (err) {
    console.error(
      "Todo fetching has failed, the server is not accessible!",
      err
    );
  }
}
export async function updateTodo(id, state) {
  try {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: state }),
    });
  } catch (err) {
    console.error("Todo update has failed!", err);
  }
}
export async function createTodo(title) {
  try {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    });
  } catch (err) {
    console.error("Add todo has failed!", err);
  }
}
export async function deleteTodo(id) {
  try {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Todo remove has failed!", err);
  }
}
