import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import SmartToySharpIcon from "@mui/icons-material/SmartToySharp";

const Sidebar = () => {
  const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "black",
  });
  return (
    <Box color={"white"} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <Typography variant="h5">Categories</Typography>
        <ListItemButton>
          <StyledLink to="/anime">
            <ListItemText primary="Anime" />
          </StyledLink>
        </ListItemButton>
        <ListItemButton>
          <StyledLink to="/comics">
            <ListItemText primary="Comics" />
          </StyledLink>
        </ListItemButton>
        <ListItemButton>
          <StyledLink to="/games">
            <ListItemText primary="Games" />
          </StyledLink>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
