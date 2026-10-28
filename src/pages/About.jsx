import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="about-container">
        <p className="eyebrow">ABOUT US</p>

        <h1>
          A little progress <span>every day.</span>
        </h1>

        <p className="about-description">
          TaskMate is a simple task management application designed
          to help you organize your work, track your progress, and
          build consistent habits.
        </p>

        <div className="about-card">
          <h2>Our Goal</h2>

          <p>
            Break your goals into small tasks, complete them one
            step at a time, and make every day count.
          </p>
        </div>

        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}

export default About;