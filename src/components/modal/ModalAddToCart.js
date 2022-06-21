import { Box, Modal, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { style } from "./ModalAddToCart.styled";

const ModalAddToCart = ({
  open,
  handleClose,
  title,
  subTitle,
  buttonLeft,
  buttonRight,
  to,
}) => {
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
            {title && (
              <Typography id="modal-modal-title" variant="h5" component="h2">
                {title}
              </Typography>
            )}
            {subTitle && (
              <Typography id="modal-modal-description" sx={{ mt: 1, mb: 1 }}>
                {subTitle}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {buttonLeft && <Button onClick={handleClose}>{buttonLeft}</Button>}
            {buttonRight && (
              <Link to={to}>
                <Button onClick={handleClose}>{buttonRight}</Button>
              </Link>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddToCart;
