import { useTodos } from "../context/TodoContext";

function Todoitem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          aria-label={`Mark ${todo.title} as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />

        <span className="todo-title">{todo.title}</span>
      </label>

      <div className="todo-right">
        <span className={`status ${todo.completed ? "done" : "pending"}`}>
          {todo.completed ? "Completed" : "Active"}
        </span>

        <button
          type="button"
          className="delete-button"
          onClick={() => deleteTodo(todo.id)}
          aria-label={`Delete ${todo.title}`}
          title="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Todoitem;

