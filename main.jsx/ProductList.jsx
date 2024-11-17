//TASK 3 - Create the ProductList Component:

import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    //TASK 5 - Implement Keys in the ProductList Component:
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
