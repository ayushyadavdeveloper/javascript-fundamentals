import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTodo(title);
    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-label="Enter a new task"
        maxLength={200}
      />

      <button type="submit" className="add-button">
        + Add Task
      </button>
    </form>
  );
}

export default TodoForm;