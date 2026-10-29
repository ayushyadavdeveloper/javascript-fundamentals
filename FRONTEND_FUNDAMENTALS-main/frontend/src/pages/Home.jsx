import { useMemo, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/useRecipes";

export default function Home() {
  const { recipes } = useRecipes(); const [search, setSearch] = useState(""); const [category, setCategory] = useState("All");
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Drinks"];
  const visible = useMemo(() => recipes.filter((recipe) => (category === "All" || recipe.category === category) && `${recipe.title} ${recipe.description} ${recipe.ingredients.join(" ")}`.toLowerCase().includes(search.toLowerCase())), [recipes, search, category]);
  return <main>
    <section className="explore-heading"><h1>Find your next <em>favorite.</em></h1><span>{recipes.length} recipes and counting</span></section>
    <div className="search-row"><label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search recipes or ingredients..." /></label></div>
    <div className="category-tabs">{categories.map((item) => <button key={item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
    {visible.length ? <section className="recipe-grid">{visible.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</section> : <section className="empty-state"><div>🍑</div><h2>No recipes found</h2><p>Try another search or category, or add a new recipe to your collection.</p></section>}
  </main>;
}
