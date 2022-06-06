import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = ({ searchProductsByCategory, searchProducts }) => {
  return (
    <Box color={"white"} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <Typography variant="h5">Categories</Typography>
        <ListItemButton onClick={() => searchProducts("")}>
          <ListItemText primary="Home" />
        </ListItemButton>
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
