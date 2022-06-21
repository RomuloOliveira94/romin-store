import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { ShoppingBag } from "@mui/icons-material";
import FooterNavBar from "./FooterNavBar";
import { Link } from "react-router-dom";

const containerNavBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
};

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: "80%",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const NavBar = ({ searchProducts, searchProductsByCategory }) => {
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      searchProducts(search);
      setSearch("");
    } else if (e.type === "click") {
      searchProducts(search);
      setSearch("");
    }
    return;
  };

  return (
    <AppBar color={"secondary"} position="sticky" sx={containerNavBar}>
      <StyledToolbar>
        <Typography
          variant="h6"
          onClick={handleSearch}
          sx={{ cursor: "pointer" }}
        >
          <StyledLink to="/">Romin's Store</StyledLink>
        </Typography>
        <FooterNavBar
          handleText={handleText}
          handleSearch={handleSearch}
          search={search}
          searchProductsByCategory={searchProductsByCategory}
        />
        <StyledLink to="cart">
          <ShoppingBag fontSize="large" />
        </StyledLink>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
