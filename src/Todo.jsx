import { useState } from "react";
import "./style.css"
const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // Generate a unique ID for each todo item
  const genetateid = () => {
    return Math.floor(Math.random() * 10000);
  };

  // Add a new todo to the list
  const handleSubmit = () => {
    if (!input.trim()) return; // Prevent adding empty todos
    setTodo((todos) => [
      ...todos,
      {
        text: input,
        id: genetateid(),
      },
    ]);
    setInput(""); // Clear the input field
  };

  // Remove a todo by filtering it out by ID
  const handleRemove = (id) => {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ul className="todo-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            {text}
            <button onClick={() => handleRemove(id)} style={{ marginLeft: "10px" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
