import {
  AppBar,
  Box,
  Button,
  Input,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { ShoppingBag } from "@mui/icons-material";
import FooterNavBar from "./FooterNavBar";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
});

const NavBar = ({ searchProducts }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      searchProducts(search);
      navigate("/");
      setSearch("");
    } else if (e.type === "click") {
      searchProducts(search);
      navigate("/");
      setSearch("");
    }
    return;
  };

  return (
    <AppBar color={"secondary"} position="sticky" sx={{ textAlign: "center" }}>
      <StyledToolbar>
        <Typography variant="h6">Romin's Store</Typography>
        <ShoppingBag fontSize="large" />
      </StyledToolbar>
      <FooterNavBar
        handleText={handleText}
        handleSearch={handleSearch}
        search={search}
      />
    </AppBar>
  );
};

export default NavBar;
