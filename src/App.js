import React from "react";
import "./App.css";
import ProductsList from "./ProductsList";
import Nav from "./Nav";
import { ProductProvider } from "./ProductContext";
import AddProduct from "./AddProduct";
import ListProduct from "./ListProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="editProduct" element={<ProductsList />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
