import React, { useState } from 'react';
import ProductList from './ProductList'; // Make sure this is correctly imported
import AddProductForm from './AddProductForm'; // Make sure this is correctly imported

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: '$10', description: 'Description for Product A' },
    { id: 2, name: 'Product B', price: '$20', description: 'Description for Product B' }
  ]);

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
