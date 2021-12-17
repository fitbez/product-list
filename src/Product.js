import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./product.css";

function Product({ product }) {
  const { id, name, price } = product;
  const { deleteProduct } = useContext(ProductContext);
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
          <div className="btn-edit">Edit</div>
          <div className="btn-delete" onClick={() => deleteProduct(id)}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
