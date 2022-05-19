import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anime from "./pages/categories/Anime";
import Comics from "./pages/categories/Comics";
import Games from "./pages/categories/Games";
import Home from "./pages/home/Home";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/games" element={<Comics />} />
          <Route path="/comics" element={<Games />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
