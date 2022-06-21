import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";
import { Box, Container, CssBaseline, Stack, styled } from "@mui/material";

const StyledApp = styled(Box)({
  backgroundColor: "#D3D3D3",
});

const styleContainer = {
  minHeight: "84vh",
  backgroundColor: "#fff",
};

function App() {
  const [loading, data, error] = useFetch(
    "https://romin-store-mock-api.herokuapp.com/products"
  );

  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    return setProductsData(data);
  }, [data]);

  function handleSearch(search) {
    if (search === "") {
      return setProductsData(data);
    } else {
      const filters =
        data &&
        data.filter((val) => {
          return val.name.toLowerCase().includes(search.toLowerCase());
        });
      return setProductsData(filters);
    }
  }

  function handleSearchByCategory(search) {
    if (search === "") {
      return setProductsData(data);
    } else {
      const filters =
        data &&
        data.filter((val) => {
          return val.category.toLowerCase().includes(search.toLowerCase());
        });
      return setProductsData(filters);
    }
  }

  return (
    <CartContextProvider>
      <StyledApp>
        <CssBaseline />
        <BrowserRouter>
          <NavBar
            searchProducts={handleSearch}
            searchProductsByCategory={handleSearchByCategory}
          />
          <Container sx={styleContainer}>
            <Stack direction={"row"} justifyContent="space-between">
              <SideBar
                searchProductsByCategory={handleSearchByCategory}
                searchProducts={handleSearch}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home data={productsData} error={error} loading={loading} />
                  }
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Stack>
          </Container>
          <Footer />
        </BrowserRouter>
      </StyledApp>
    </CartContextProvider>
  );
}

export default App;
