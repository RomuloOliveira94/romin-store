import { Box } from "@mui/material";
import React from "react";
import ProductCard from "../../components/card/ProductCard";

const Home = ({data}) => {
  return (
    <Box color={"white"} flex={4}>
      <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
        {data &&
          data.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
      </Box>
    </Box>
  );
};

export default Home;
