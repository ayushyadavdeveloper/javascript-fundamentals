import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">✓</span>
        TaskMate
      </Link>

      <NavLink to="/about" className="nav-link">
        ABOUT TASKMATE
      </NavLink>
    </nav>
  );
}

export default Navbar;