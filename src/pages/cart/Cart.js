import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  styled,
  Typography,
  Link,
  Paper,
  Container,
  Button,
} from "@mui/material";
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

const Cart = () => {
  const { cart, total, removeFromCart, createOrder } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", m:2 }}>
        Cart
      </Typography>
      {cart.map((prod) => (
        <Item key={prod.id}>
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
            <Link onClick={() => removeFromCart(prod.id)}>Remove</Link>
          </MiniInfosContainer>
        </Item>
      ))}
      {total === 0 && (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {" "}
          Your cart is empty :(
        </Typography>
      )}
      {total !== 0 && (
        <Paper
          sx={{
            margin: "15px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Total: {total.toFixed(2)}
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
