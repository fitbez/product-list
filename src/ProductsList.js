import { useContext } from "react";
import Product from "./Product";
import Nav from "./Nav";
import { ProductContext } from "./ProductContext";

function ProductsList() {
  // console.log(props);
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Nav />
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductsList;
