import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Edit from "./Edit";
import "./product.css";
import ProductsList from "./ProductsList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Product({ product }) {
  const { id, name, price } = product;
  const { deleteProduct } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="product-panel">
        <div key={id} className="product">
          <div className="product-name">
            <p>Product name: {name}</p>
          </div>
          <div className="product-price">
            <p>Product price: ${price}</p>
          </div>
        </div>
        <div className="action">
          <div className="btn-edit" onClick={handleOpen}>
            Edit
          </div>
          <div className="btn-delete" onClick={() => deleteProduct(id)}>
            Delete
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Edit product={product} />
        </Box>
      </Modal>
    </div>
  );
}

export default Product;
