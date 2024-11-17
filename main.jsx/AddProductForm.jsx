//TASK 5 - Create the AddProductForm Component:

import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  // State variables for form fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior (page refresh)

    // Create a new product object from form input values
    const newProduct = {
      name,
      price,
      description,
    };

    // Call the addProduct function passed from App component
    addProduct(newProduct);

    // Clear the form fields after submission
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state when input changes
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)} // Update state when input changes
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update state when input changes
            required
          />
        </label>
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}

export default AddProductForm;
