import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CartContext } from "../../context/CartContext";

export default function ImgMediaCard({ data }) {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <Card sx={{ margin: "30px auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          {data.name}
        </Typography>
        <Typography variant="subtitle1">{data.description}</Typography>
        <Typography variant="caption">Stock: {data.stock}</Typography>
      </CardContent>
      <Box
        sx={{ width: { xs: "90vw", sm: 400 }, height: 400, margin: "0 auto" }}
      >
        <CardMedia
          component="img"
          alt={data.name}
          width="100%"
          image={data.img}
        />
      </Box>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            bgcolor: "secondary.main",
            padding: "5px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          ${data.price}
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleAddToCart(data)}
        >
          Add to bag
        </Button>
      </CardActions>
    </Card>
  );
}
