import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./product.css";

function Product() {
  const { products } = useContext(ProductContext);
  const { updateProduct } = useContext(ProductContext);
  return (
    <div>
      {products.map((product) => {
        const { id, name, price } = product;
        return (
          <div className="product-panel" key={id}>
            <div key={id} className="product">
              <div className="product-name">
                <p>
                  Product name: <strong>{name}</strong>
                </p>
              </div>
              <div className="product-price">
                <p>
                  Product price: <strong>${price}</strong>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
