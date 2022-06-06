import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

const Sidebar = ({ searchProductsByCategory, searchProducts }) => {
  return (
    <Box color={"white"} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <Typography variant="h5">Categories</Typography>
        <StyledLink to="/">
          <ListItemButton onClick={() => searchProducts("")}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </StyledLink>
        <ListItemButton onClick={() => searchProductsByCategory("Anime")}>
          <ListItemText primary="Anime" />
        </ListItemButton>
        <ListItemButton onClick={() => searchProductsByCategory("Comics")}>
          <ListItemText primary="Comics" />
        </ListItemButton>
        <ListItemButton onClick={() => searchProductsByCategory("Games")}>
          <ListItemText primary="Games" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
