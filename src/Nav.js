import React, { useContext } from "react";
import ProductsList from "./ProductsList";
import Porduct from "./Product";
import ProductContext from "./ProductContext";
import { Link } from "react-router-dom";

function Nav(props) {
  const { products } = useContext(ProductContext);
  return (
    <div className="nav">
      <Link to="/">Product List</Link>
      <p>I have {products.length} products in my list</p>
      <Link to="/editProduct">Manage Product</Link>
      <Link to="/addProduct">Add Product</Link>
    </div>
  );
}

export default Nav;
