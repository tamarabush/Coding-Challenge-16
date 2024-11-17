//TASK 2 - Create the App Component:

import React, { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 12479, name: "Perfume", price: "$80", description: "8oz Vanilla Spray bottle perfum." },
    { id: 22479, name: "Mascara", price: "$25", description: "Fine black mascara tube with roll brush." },
    { id: 22479, name: "Blush", price: "$20", description: "Deep red blush tube." },
    { id: 22479, name: "Powder", price: "$20", description: "Fine matte face." },
  ]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
