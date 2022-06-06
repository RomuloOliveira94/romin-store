import { Box, Button, Input, styled, Toolbar } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const FooterToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
});

const StyledInput = styled(Input)({
  backgroundColor: "white",
  padding: 2,
  borderRadius: "5px 0 0 5px",
});

const SearchBar = styled(Box)({
  display: "flex",
  alignItens: "center",
  justifyContent: "center",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#A4161A",
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
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <StyledButton onClick={handleSearch}>
          <StyledLink to="/">Home</StyledLink>
        </StyledButton>

        <StyledButton>Anime</StyledButton>

        <StyledButton>Comics</StyledButton>

        <StyledButton>Games</StyledButton>
      </Box>
      <SearchBar>
        <StyledInput
          placeholder="Search..."
          onChange={handleText}
          value={search}
          onKeyUp={handleSearch}
        />
        <Button variant="contained" onClick={handleSearch}>
          <SearchIcon fontSize="medium" />
        </Button>
      </SearchBar>
    </FooterToolbar>
  );
};

export default FooterNavbar;
