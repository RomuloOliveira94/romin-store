import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anime from "./pages/categories/Anime";
import Comics from "./pages/categories/Comics";
import Games from "./pages/categories/Games";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/games" element={<Comics />} />
          <Route path="/comics" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
