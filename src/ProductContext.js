import React, { createContext, useState } from "react";

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
  return (
    <div>
      <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
}

export default ProductContext;
