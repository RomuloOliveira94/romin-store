import { AppBar, Box, styled, Typography, Link } from "@mui/material";
import React from "react";

const StyledFooter = styled(Box)({
  height: "10vh",
  textAlign: "center",
  color: "white",
});

const Footer = () => {
  return (
    <AppBar color={"secondary"} position="static">
      <StyledFooter>
        <Typography variant="h4">Romin's Store</Typography>
        <Typography variant="h5">
          Developed by <Link href="#">Rômulo Oliveira</Link>
        </Typography>
      </StyledFooter>
    </AppBar>
  );
};

export default Footer;
