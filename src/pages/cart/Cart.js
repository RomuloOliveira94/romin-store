import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "../../components/card/CartItemCard";
import { Typography, Paper, Container, Button } from "@mui/material";
import ModalAddToCart from "../../components/modal/ModalAddToCart";

const paperStyles = {
  margin: "15px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Cart = () => {
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { cart, removeFromCart, createOrder, incrementItem } =
    useContext(CartContext);

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
          incrementItem={incrementItem}
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
            <Typography variant="h6" onClick={handleOpen}>
              Order
            </Typography>
          </Button>
        </Paper>
      )}
      {
        <ModalAddToCart
          open={open}
          handleClose={handleClose}
          title="Thanks for buy!"
          subTitle="You will receive a email with your order."
          buttonLeft="Close"
          buttonRight="Home"
          to="/"
        />
      }
    </Container>
  );
};

export default Cart;
