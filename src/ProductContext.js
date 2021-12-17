import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "phone",
      price: "400.00",
    },
    {
      id: 2,
      name: "desktop computer",
      price: "500.00",
    },
    {
      id: 3,
      name: "Monitor",
      price: "100.00",
    },
  ]);

  const addProduct = (name, price) => {
    setProducts([...products, { id: uuidv4(), name, price }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((pro) => pro.id !== id));
  };

  return (
    <div>
      <ProductContext.Provider
        value={{ products, setProducts, addProduct, deleteProduct }}
      >
        {props.children}
      </ProductContext.Provider>
    </div>
  );
}

export default ProductContext;
