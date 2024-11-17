//TASK 2 - Create the App Component:

import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // Initial list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: '$10', description: 'Description for Product A' },
    { id: 2, name: 'Product B', price: '$20', description: 'Description for Product B' },
  ]);

  // Function to add a new product to the list
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
}

export default App;

