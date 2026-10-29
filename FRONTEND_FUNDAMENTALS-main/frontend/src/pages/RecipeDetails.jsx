import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "../context/useRecipes";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, favorites, toggleFavorite, deleteRecipe } = useRecipes();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return <main className="empty-state"><h2>Recipe not found</h2><Link to="/" className="save-button">Back to recipes</Link></main>;
  }

  const isFavorite = favorites.includes(recipe.id);

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/");
  };

  return (
    <main className="details-page">
      <Link className="back-link" to="/">← Back to recipes</Link>
      <div className="details-layout">
        <div className="details-image">
          <img src={recipe.image || "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"} alt={recipe.title} />
          <div className="details-actions">
            <button className="save-toggle-button" onClick={() => toggleFavorite(recipe.id)}>{isFavorite ? "♥ Saved" : "♡ Save recipe"}</button>
            <button className="delete-button" onClick={handleDelete}>Delete recipe</button>
          </div>
        </div>
        <section className="details-content">
          <span className="eyebrow">{recipe.category}</span>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="detail-meta">
            <span><b>◷</b>{recipe.time} minutes</span>
            <span><b>♙</b>{recipe.servings} servings</span>
            <span><b>♨</b>{recipe.difficulty}</span>
          </div>
        </section>
      </div>
      <div className="recipe-instructions">
        <section>
          <h2>Ingredients</h2>
          {recipe.ingredients.map((item, index) => (
            <label className="ingredient" key={index}><input type="checkbox" /><span>{item}</span></label>
          ))}
        </section>
        <section>
          <h2>Method</h2>
          {recipe.steps.map((step, index) => (
            <div className="step" key={index}><b>{index + 1}</b><p>{step}</p></div>
          ))}
        </section>
      </div>
    </main>
  );
}
