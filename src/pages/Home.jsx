import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoFrom.jsx";
import TodoList from "../components/TodoList.jsx";
import { useTodos } from "../context/TodoContext";

function Home() {
  const {
    totalTasks,
    remainingTasks,
    completedTasks,
  } = useTodos();

  return (
    <div className="app-shell">
      <Navbar />

      <main className="home-container">
        <section className="hero">
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>

          <h1>
            Make today <span>count.</span>
          </h1>

          <p className="hero-description">
            Small steps every day lead to big results.
          </p>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon total-icon">▤</div>

            <div>
              <p>Total Tasks</p>
              <h2>{totalTasks}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon remaining-icon">◷</div>

            <div>
              <p>Remaining</p>
              <h2>{remainingTasks}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon completed-icon">✓</div>

            <div>
              <p>Completed</p>
              <h2>{completedTasks}</h2>
            </div>
          </div>
        </section>

        <section className="tasks-card">
          <div className="section-heading">
            <div>
              <h2>My Tasks</h2>
              <p>Keep track of what matters today.</p>
            </div>
          </div>

          <TodoForm />

          <TodoList />

          {totalTasks > 0 && (
            <div className="task-footer">
              {completedTasks} of {totalTasks} tasks completed
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        Made with focus and consistency.
      </footer>
    </div>
  );
}

export default Home;