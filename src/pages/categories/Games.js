import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductCard from "../../components/card/ProductCard";

const Games = () => {
  const [filteredData, setFilteredData] = useState();
  const [loading, data, error] = useFetch(
    "https://romin-store-mock-api.herokuapp.com/products"
  );

  useEffect(() => {
    const filters =
      data &&
      data.filter((val) => {
        return val.category.toLowerCase().includes("games");
      });
    setFilteredData(filters);
  }, [data]);
  return (
    <Box color={"white"} flex={4}>
      {error && <h1>Temos um problema tente novamente mais tarde</h1>}
      {loading && <h1>Carregando conteúdo</h1>}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {filteredData &&
          filteredData.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
      </Box>
    </Box>
  );
};

export default Games;
