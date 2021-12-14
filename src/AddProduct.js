import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import Nav from "./Nav";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useContext(ProductContext);
  const [productId, setProductId] = useState(4);

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPrice = (e) => {
    setProductPrice(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProductId((id) => id + 1);
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: productId, name: productName, price: productPrice },
    ]);
  };

  console.log(products);

  return (
    <div>
      <Nav />
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="please insert product name"
          onChange={handleProductName}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={handleProductPrice}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
