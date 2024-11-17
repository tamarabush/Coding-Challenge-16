//TASK 5 - Create the AddProductForm Component:

import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  //state to manage the input fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //create the new product object
    const newProduct = {
      name,
      price,
      description,
    };

    //pass the new product to the addProduct function
    addProduct(newProduct);

    //clear the input fields after submission
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>
      <label>
        Price:
        <input 
          type="text" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </label>
      <label>
        Description:
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
