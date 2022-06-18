import { Box, Modal, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { style } from "./ModalAddToCart.styled";

const ModalAddToCart = ({ open, handleClose }) => {
  console.log("renderizei modal");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Product added to the cart!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1, mb: 1 }}>
              What do you want to do now?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/cart">
              <Button onClick={handleClose}>Cart</Button>
            </Link>
            <Button onClick={handleClose}>Keep Buying</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddToCart;
