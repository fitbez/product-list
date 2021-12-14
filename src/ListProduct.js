import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./product.css";

function Product() {
  const [products, setProducts] = useContext(ProductContext);
  return (
    <div>
      {products.map((product) => {
        const { id, name, price } = product;
        return (
          <div className="product-panel">
            <div key={id} className="product">
              <div className="product-name">
                <p>Product name: {name}</p>
              </div>
              <div className="product-price">
                <p>Product price: ${price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
