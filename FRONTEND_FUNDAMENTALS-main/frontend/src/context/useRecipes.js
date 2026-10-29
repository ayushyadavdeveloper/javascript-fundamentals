import { useContext } from "react";
import { RecipeContext } from "./RecipeContextValue";

export function useRecipes() {
  return useContext(RecipeContext);
}
