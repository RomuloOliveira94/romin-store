import { Typography, Box } from "@mui/material";
import React from "react";
// import { useEffect, useState } from "react";
// import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  //   const [filteredData, setFilteredData] = useState();
  //   const [loading, data, error] = useFetch(
  //     "https://romin-store-mock-api.herokuapp.com/products"
  //   );

  //   useEffect(() => {
  //     const filters =
  //       data &&
  //       data.filter((val) => {
  //         return val.name.toLowerCase().includes("mario");
  //       });
  //     setFilteredData(filters);
  //   }, [data]);

  return (
    <Box bgcolor={"white"} flex={4}>
        <Typography variant="h1">Home</Typography>
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
