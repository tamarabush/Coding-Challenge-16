//TASK 4 - Create the ProductItem Component:


import React from 'react';

//TASK 5 - Implement Keys in the ProductList Component:
function ProductItem({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductItem;
