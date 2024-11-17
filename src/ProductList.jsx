//TASK 3 - create the ProductList Component:

import React from 'react';
import ProductItem from './ProductItem'; //ensure this is correctly imported

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id} //use a unique key for each item
          product={product} //pass each product as a prop
        />
      ))}
    </div>
  );
}

export default ProductList;
