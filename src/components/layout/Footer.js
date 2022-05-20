import { AppBar, Box, styled, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const StyledFooter = styled(Box)({
    height: "10vh",
    textAlign: "center",
    color: "white"
  });
  return (
    <AppBar color={"secondary"} position="static">
      <StyledFooter>
        <Typography variant="h3">The footer</Typography>
      </StyledFooter>
    </AppBar>
  );
};

export default Footer;
