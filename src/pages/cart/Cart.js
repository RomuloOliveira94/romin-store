import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "../../components/card/CartItemCard";
import { Typography, Paper, Container, Button } from "@mui/material";

const paperStyles = {
  margin: "15px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Cart = () => {
  const { cart, removeFromCart, createOrder } = useContext(CartContext);

  const total = cart.reduce((acc, value) => {
    acc += value.values;
    return acc;
  }, 0);

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", m: 2 }}>
        Cart
      </Typography>
      {cart.map((prod) => (
        <CartItemCard
          prod={prod}
          key={prod.id}
          removeFromCart={removeFromCart}
        />
      ))}
      {total === 0 && (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {" "}
          Your cart is empty :(
        </Typography>
      )}
      {total !== 0 && (
        <Paper sx={paperStyles}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Total: ${total.toFixed(2)}
          </Typography>
          <Button onClick={createOrder}>
            <Typography variant="h6">Order</Typography>
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default Cart;
