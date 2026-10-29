import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RecipeProvider } from "./context/RecipeContext";
import Home from "./pages/Home";
import Favorities from "./pages/Favorities";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import "./styles/App.css";
import "./styles/Global.css";

export default function App() { return <RecipeProvider><BrowserRouter><div className="app-shell"><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/favorites" element={<Favorities />} /><Route path="/add" element={<AddRecipe />} /><Route path="/recipes/:id" element={<RecipeDetails />} /></Routes><footer><span>🍑 RecipeBook</span><span>Made with love, every day.</span></footer></div></BrowserRouter></RecipeProvider>; }
