import { Typography, Box } from "@mui/material";
import React from "react";
import ProductCard from "../../components/card/ProductCard";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const [filteredData, setFilteredData] = useState();
  const [loading, data, error] = useFetch(
    "https://romin-store-mock-api.herokuapp.com/products"
  );

  //   useEffect(() => {
  //     const filters =
  //       data &&
  //       data.filter((val) => {
  //         return val.name.toLowerCase().includes("mario");
  //       });
  //     setFilteredData(filters);
  //   }, [data]);

  return (
    <Box color={"white"} flex={4}>
      <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
        {data &&
          data.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
      </Box>

      {/* {error && <h1>Temos um problema tente novamente mais tarde</h1>}
      {loading && <h1>Carregando conteúdo</h1>}
      {data &&
        data.map((items, index) => (
          <div key={index}>
            <img src={items.img} alt="" />
            <Typography>{items.name}</Typography>
            <Typography>{items.description}</Typography>
            <Typography>{items.price}</Typography>
          </div>
        ))}
      {filteredData &&
        filteredData.map((val, index) => (
          <div key={index}>
            <img src={val.img} alt="" />
            <li>{val.name}</li>
            <li>{val.description}</li>
          </div>
        ))} */}
    </Box>
  );
};

export default Home;
