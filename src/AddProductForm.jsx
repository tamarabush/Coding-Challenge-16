import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && description) {  // Ensure all fields are filled
      const newProduct = { name, price, description };
      addProduct(newProduct); // Add the new product
      setName('');
      setPrice('');
      setDescription('');
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Update price
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
