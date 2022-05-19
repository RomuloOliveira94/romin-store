import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anime from "./pages/categorys/Anime";
import Comics from "./pages/categorys/Comics";
import Games from "./pages/categorys/Games";
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
