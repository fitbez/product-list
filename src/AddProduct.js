import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());

function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });

  const { name, price } = newProduct;

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct(name, price);
    navigate("/");
  };

  const onInputChange = (e) => {
    console.log(e.target.name);
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav />
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="please insert product name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => onInputChange(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
