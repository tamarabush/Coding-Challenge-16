import React from 'react';
import ProductItem from './ProductItem'; // Ensure this is correctly imported

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id} // Use a unique key for each item
          product={product} // Pass each product as a prop
        />
      ))}
    </div>
  );
}

export default ProductList;
