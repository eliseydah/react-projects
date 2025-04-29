import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";
import Counter from "./Counter";
import CompletedCounter from "./CompletedCounter";
import RadioButtons from "./RadioButtons";
import { getTodos, updateTodo, createTodo, deleteTodo } from "./api";

function App() {
  const [buttonFilter, setButtonFilter] = useState("All");
  const [todos, setTodos] = useState([]); // ref([])
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [title, setTitle] = useState("");

  async function fetchTodos() {
    const result = await getTodos();

    setTodos(result);
  }

  async function addTodo() {
    await createTodo(title);
    await fetchTodos();
    setTitle("");
  }

  async function removeTodo(todo) {
    console.log(todo);
    await deleteTodo(todo.id);
    await fetchTodos();
  }

  async function removeCompletedTodo() {
    const completedTodos = todos.filter((t) => t.completed);
    await Promise.all(
      completedTodos.map(async (todo) => {
        return deleteTodo(todo.id);
      })
    );
    await fetchTodos();
  }

  async function onToggleTodo(todo) {
    await updateTodo(todo.id, !todo.completed);
    await fetchTodos();
  }

  function reloadFilteredTodos() {
    if (buttonFilter === "All") {
      setFilteredTodos(todos);
    }
    if (buttonFilter === "Active") {
      setFilteredTodos(todos.filter((t) => !t.completed));
    }
    if (buttonFilter === "Completed") {
      setFilteredTodos(todos.filter((t) => t.completed));
    }
  }

  useEffect(reloadFilteredTodos, [todos, buttonFilter]);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1>todos</h1>
      <div className="main-content">
        <form
          className="todo-form"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="todo-form-input"
            type="title"
            placeholder="What needs to be completed?"
            value={title}
            required
          />
        </form>
      </div>
      {filteredTodos.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          removeItem={() => {
            removeTodo(item);
          }}
          onToggleTodo={() => {
            onToggleTodo(item);
          }}
        />
      ))}
      <div className="panel">
        <Counter todos={todos} />
        <RadioButtons
          changeFilterValue={(value) => {
            setButtonFilter(value);
          }}
        />
        <CompletedCounter
          todos={todos}
          removeCompletedTodo={() => {
            removeCompletedTodo();
          }}
        />
      </div>
    </>
  );
}

export default App;
