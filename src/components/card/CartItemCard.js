import React from "react";
import { styled, Typography, Paper, Button, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)({
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  margin: "10px",
  padding: "10px",
});

const MiniInfosContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const CartItemCard = ({ prod, removeFromCart, totalForEachItem }) => {
  return (
    <Item>
      <MiniInfosContainer>
        <Typography variant="h5">{prod.name}</Typography>
        <CardMedia
          component="img"
          height="180"
          image={prod.img}
          alt={prod.name}
        />
      </MiniInfosContainer>
      <MiniInfosContainer>
        <Typography variant="h5">${prod.price}</Typography>
        {prod.quantity > 1 && (
          <Typography variant="caption">Quantity: {prod.quantity}</Typography>
        )}
        <Button onClick={() => removeFromCart(prod)}>Remove</Button>
      </MiniInfosContainer>
    </Item>
  );
};

export default CartItemCard;
