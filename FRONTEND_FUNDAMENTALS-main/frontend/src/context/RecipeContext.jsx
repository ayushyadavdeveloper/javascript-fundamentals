import { useEffect, useMemo, useState } from "react";
import { RecipeContext } from "./RecipeContextValue";

const starterRecipes = [
  { id: "creamy-tomato-pasta", title: "Creamy Tomato Pasta", description: "A comforting pasta tossed in a silky tomato and cream sauce with fresh basil.", category: "Dinner", difficulty: "Easy", time: 25, servings: 2, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80", ingredients: ["250g pasta", "2 cups cherry tomatoes", "1/2 cup cream", "Fresh basil", "Parmesan"], steps: ["Cook the pasta until al dente.", "Sauté tomatoes, then stir in cream.", "Toss pasta through the sauce and finish with basil."], rating: 4.8 },
  { id: "rainbow-buddha-bowl", title: "Rainbow Buddha Bowl", description: "A colorful, nourishing bowl with grains, crunchy vegetables, and a zesty dressing.", category: "Lunch", difficulty: "Medium", time: 30, servings: 2, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80", ingredients: ["Cooked quinoa", "Avocado", "Cherry tomatoes", "Cucumber", "Mixed greens"], steps: ["Arrange grains and vegetables in bowls.", "Whisk together the dressing.", "Drizzle and serve immediately."], rating: 4.9 },
  { id: "berry-breakfast-oats", title: "Berry Breakfast Oats", description: "Creamy overnight oats topped with juicy berries and toasted seeds.", category: "Breakfast", difficulty: "Easy", time: 10, servings: 1, image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=80", ingredients: ["Rolled oats", "Milk", "Greek yogurt", "Mixed berries", "Honey"], steps: ["Combine oats, milk and yogurt.", "Chill overnight.", "Top with berries and honey."], rating: 4.7 },
  { id: "lemon-dessert-cake", title: "Lemon Cloud Cake", description: "A light lemon sponge finished with soft vanilla cream.", category: "Dessert", difficulty: "Medium", time: 45, servings: 8, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80", ingredients: ["Flour", "Eggs", "Sugar", "Fresh lemon", "Cream"], steps: ["Make and bake the sponge.", "Cool completely.", "Decorate with cream and lemon zest."], rating: 4.8 }
];

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(() => {
    try { return JSON.parse(localStorage.getItem("recipebook-recipes")) || starterRecipes; }
    catch { return starterRecipes; }
  });
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("recipebook-favorites")) || []; }
    catch { return []; }
  });

  useEffect(() => localStorage.setItem("recipebook-recipes", JSON.stringify(recipes)), [recipes]);
  useEffect(() => localStorage.setItem("recipebook-favorites", JSON.stringify(favorites)), [favorites]);

  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const addRecipe = (recipe) => setRecipes((current) => [{ ...recipe, id: `${Date.now()}` }, ...current]);
  const deleteRecipe = (id) => { setRecipes((current) => current.filter((recipe) => recipe.id !== id)); setFavorites((current) => current.filter((recipeId) => recipeId !== id)); };
  const value = useMemo(() => ({ recipes, favorites, toggleFavorite, addRecipe, deleteRecipe }), [recipes, favorites]);
  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
}
