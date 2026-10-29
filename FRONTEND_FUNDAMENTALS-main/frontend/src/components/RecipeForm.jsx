import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

const blank = { title: "", description: "", ingredients: "", steps: "", category: "Dinner", difficulty: "Easy", time: "30", servings: "2", image: "" };

export default function RecipeForm() {
  const [form, setForm] = useState(blank);
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => { event.preventDefault(); if (!form.title.trim()) return; addRecipe({ ...form, time: Number(form.time), servings: Number(form.servings), ingredients: form.ingredients.split("\n").filter(Boolean), steps: form.steps.split("\n").filter(Boolean) }); navigate("/"); };
  return <form className="recipe-form" onSubmit={submit}>
    <div className="form-grid">
      <label className="full">Recipe name *<input name="title" value={form.title} onChange={update} placeholder="e.g. Creamy tomato pasta" required /></label>
      <label>Category<select name="category" value={form.category} onChange={update}><option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Dessert</option><option>Snack</option><option>Drinks</option></select></label>
      <label>Difficulty<select name="difficulty" value={form.difficulty} onChange={update}><option>Easy</option><option>Medium</option><option>Hard</option></select></label>
      <label>Prep time (minutes)<input type="number" min="1" name="time" value={form.time} onChange={update} /></label>
      <label>Servings<input type="number" min="1" name="servings" value={form.servings} onChange={update} /></label>
      <label className="full">Image URL (optional)<input type="url" name="image" value={form.image} onChange={update} placeholder="https://images.unsplash.com/..." /></label>
      <label className="full">Short description<textarea name="description" value={form.description} onChange={update} placeholder="What makes this recipe special?" /></label>
      <label className="full">Ingredients<textarea rows="5" name="ingredients" value={form.ingredients} onChange={update} placeholder={"Pasta\nFresh tomatoes\nCream"} /><small>Put each ingredient on a new line</small></label>
      <label className="full">Method<textarea rows="5" name="steps" value={form.steps} onChange={update} placeholder={"Boil the pasta\nPrepare the sauce"} /><small>Put each step on a new line</small></label>
    </div>
    <div className="form-actions"><button type="button" className="clear-button" onClick={() => setForm(blank)}>Clear form</button><button className="save-button">Save recipe</button></div>
  </form>;
}
