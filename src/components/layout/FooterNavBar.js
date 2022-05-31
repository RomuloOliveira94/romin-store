import { Box, Button, Input, styled, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const FooterToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
});

const StyledInput = styled(Input)({
  backgroundColor: "white",
  padding: 2,
  marginLeft: 10,
  borderRadius: "5px 0 0 5px",
});

const SearchBar = styled(Box)({
  display: "flex",
  alignItens: "center",
});

const StyledButton = styled(Button)({
  textDecoration: "none",
});

const FooterNavbar = ({ handleSearch, handleText, search }) => {
  return (
    <FooterToolbar
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        marginBottom: { xs: "10px" },
      }}
    >
      <Link to="/" onClick={handleSearch}>
        <StyledButton>Home</StyledButton>
      </Link>
      <Link to="/anime">
        <StyledButton>Anime</StyledButton>
      </Link>
      <Link to="/comics">
        <StyledButton>Comics</StyledButton>
      </Link>
      <Link to="/games">
        <StyledButton>Games</StyledButton>
      </Link>
      <SearchBar>
        <StyledInput
          placeholder="Search..."
          onChange={handleText}
          value={search}
          onKeyUp={handleSearch}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
        >
          <SearchIcon fontSize="medium" />
        </Button>
      </SearchBar>
    </FooterToolbar>
  );
};

export default FooterNavbar;
