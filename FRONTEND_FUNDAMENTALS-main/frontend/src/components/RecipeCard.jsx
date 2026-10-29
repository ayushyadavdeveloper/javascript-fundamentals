import { Link } from "react-router-dom";
import { useRecipes } from "../context/useRecipes";

export default function RecipeCard({ recipe }) {
  const { favorites, toggleFavorite } = useRecipes();
  const isFavorite = favorites.includes(recipe.id);
  return <article className="recipe-card">
    <div className="card-image-wrap">
      <img src={recipe.image || "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"} alt={recipe.title} />
      <span className="category-pill">{recipe.category}</span>
      <button className={`favorite-button ${isFavorite ? "is-favorite" : ""}`} onClick={() => toggleFavorite(recipe.id)} aria-label="Toggle favorite">{isFavorite ? "♥" : "♡"}</button>
    </div>
    <div className="card-content">
      <div className="recipe-meta"><span>◷ {recipe.time} min</span><i>•</i><span>♨ {recipe.difficulty}</span></div>
      <h3>{recipe.title}</h3><p>{recipe.description}</p>
      <div className="card-bottom"><span className="servings">♙ {recipe.servings} servings</span><Link to={`/recipes/${recipe.id}`} className="text-link">View recipe <span>→</span></Link></div>
    </div>
  </article>;
}
