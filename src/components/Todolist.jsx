import { useTodos } from "../context/TodoContext";
import Todoitem from "./Todoitem";

function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>
        <h3>No tasks yet</h3>
        <p>Add your first task and make today count!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;