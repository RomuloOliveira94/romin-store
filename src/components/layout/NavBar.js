import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Input,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import { ShoppingBag } from "@mui/icons-material";

const NavBar = ({ handleSearch }) => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    height: "8vh",
  });

  const FooterToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    height: "2vh",
  });

  const StyledInput = styled(Input)({
    backgroundColor: "white",
    padding: 2,
    marginRight: 10,
  });

  const SeachBar = styled(Box)({
    display: "flex",
    alignItens: "center",
  });

  return (
    <AppBar color={"secondary"} position="sticky">
      <StyledToolbar>
        <Typography variant="h5">Romin's Store</Typography>
        <SeachBar>
          <StyledInput placeholder="Search..." />
          <Button variant="contained" onClick={handleSearch}>
            <SearchIcon fontSize="medium" />
          </Button>
        </SeachBar>
        <ShoppingBag fontSize="large" />
      </StyledToolbar>
      <FooterToolbar>
        <Button>Anime</Button>
        <Button>Comics</Button>
        <Button>Games</Button>
      </FooterToolbar>
    </AppBar>
  );
};

export default NavBar;
