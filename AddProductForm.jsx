//TASK 5 - Create the AddProductForm Component:

import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (eve) => {
    eve.preventDefault();

    const newProduct = { name, price, description };
    addProduct(newProduct);

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
            onChange={(eve) => setName(eve.target.value)}
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
            onChange={(eve) => setPrice(eve.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(eve) => setDescription(e.target.value)}
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
