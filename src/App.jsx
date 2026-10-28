import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TodoProvider } from "./context/TodoContext";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFount.jsx";

import "./styles/gobal.css";
import "./styles/app.css";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
