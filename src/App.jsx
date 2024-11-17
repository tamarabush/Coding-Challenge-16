import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Perfume', price: '$80', description: 'Lavender kiss spray perfume bottle' },
    { id: 2, name: 'Mascara', price: '$26', description: 'Black liquid mascara brush' },
    { id: 3, name: 'Blush', price: '$33', description: 'Deep red liquid blush tube' }
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]); // Add new product to the list
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
