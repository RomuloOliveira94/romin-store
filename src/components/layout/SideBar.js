import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import SmartToySharpIcon from "@mui/icons-material/SmartToySharp";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor={"white"}
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <Typography variant="h6">
          {" "}
          <SmartToySharpIcon fontSize="small" /> Categories
        </Typography>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Anime" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Comics" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Games" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
