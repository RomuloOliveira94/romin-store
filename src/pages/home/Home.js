import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../components/card/ProductCard";
import ModalAddToCart from "../../components/modal/ModalAddToCart";

const Home = ({ data, error, loading }) => {
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
            <ProductCard data={product} key={product.id} />
          ))}
        <ModalAddToCart />
      </Box>
    </Box>
  );
};

export default Home;
