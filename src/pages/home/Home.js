import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import ModalAddToCart from "../../components/modal/ModalAddToCart";
import { CartContext } from "../../context/CartContext";

const Home = ({ data, error, loading, soldOff }) => {
  const { handleAddToCart } = useContext(CartContext);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addToCart = (product) => {
    handleAddToCart(product);
    return handleOpen();
  };

  return (
    <Box color={"white"} flex={4}>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {loading && (
          <Typography variant="h3" sx={{ margin: "20px auto" }}>
            Loading Content...
          </Typography>
        )}
        {error && (
          <Typography variant="h3" sx={{ margin: "20px auto" }}>
            Sorry try again later...
          </Typography>
        )}
        {data &&
          data.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              addToCart={addToCart}
            />
          ))}
        <ModalAddToCart
          open={open}
          handleClose={handleClose}
          title="Product added to the cart!"
          subTitle="What do you want to do now?"
          buttonLeft="Keep Buying"
          buttonRight="Cart"
          to="/cart"
        />
      </Box>
    </Box>
  );
};

export default Home;
