import { Link } from "react-router-dom";
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
    alignItems: "center",
    textAlign: "center",
  });

  const FooterToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  });

  const StyledInput = styled(Input)({
    backgroundColor: "white",
    padding: 2,
    marginLeft: 10,
  });

  const SeachBar = styled(Box)({
    display: "flex",
    alignItens: "center",
  });

  return (
    <AppBar color={"secondary"} position="sticky" sx={{ textAlign: "center" }}>
      <StyledToolbar>
        <Typography variant="h6">Romin's Store</Typography>
        <ShoppingBag fontSize="large" />
      </StyledToolbar>
      <FooterToolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          marginBottom: { xs: "10px" },
        }}
      >
        <Link to="/anime"><Button>Anime</Button></Link>
        <Link to="/comics"><Button>Comics</Button></Link>
        <Link to="/games"><Button>Games</Button></Link>
        <SeachBar>
          <StyledInput placeholder="Search..." />
          <Button variant="contained" onClick={handleSearch}>
            <SearchIcon fontSize="medium" />
          </Button>
        </SeachBar>
      </FooterToolbar>
    </AppBar>
  );
};

export default NavBar;
