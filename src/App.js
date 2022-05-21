import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anime from "./pages/categories/Anime";
import Comics from "./pages/categories/Comics";
import Games from "./pages/categories/Games";
import Home from "./pages/home/Home";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";
import { Box, Container, CssBaseline, Stack, styled } from "@mui/material";

function App() {
  const StyledApp = styled(Box)({
    backgroundColor: "#D3D3D3",
  });


  return (
    <StyledApp>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Container sx={{ minHeight: "80vh", backgroundColor: "#fff" }}>
          <Stack direction={"row"} justifyContent="space-between">
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/anime" element={<Anime />} />
              <Route path="/games" element={<Games />} />
              <Route path="/comics" element={<Comics />} />
            </Routes>
          </Stack>
        </Container>
        <Footer />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
