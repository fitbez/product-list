import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());

function EditProduct({ product }) {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const { updateProduct } = useContext(ProductContext);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const id = product.id;
  const updatedProduct = { id, name, price };

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });

  const handleEditProduct = (e) => {
    e.preventDefault();
    updateProduct(id, updatedProduct);
  };

  //   const onInputChange = (e) => {
  //     console.log(e.target.name);
  //     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  //   };

  return (
    <div>
      <form onSubmit={handleEditProduct}>
        <input
          type="text"
          name="name"
          placeholder="please insert product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
