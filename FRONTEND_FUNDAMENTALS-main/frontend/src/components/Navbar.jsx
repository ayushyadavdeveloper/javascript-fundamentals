import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return <header className="navbar">
    <Link to="/" className="brand" aria-label="Recipebook home"><span className="brand-mark">🍑</span><span>recipe<span>book</span></span></Link>
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Explore</NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Favorites</NavLink>
      <Link to="/add" className="add-button"><span>＋</span> Add recipe</Link>
    </nav>
  </header>;
}
