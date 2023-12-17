import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AddProduct from './addProducts';
import Products from './products';

const EditProduct = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
    setIsBlocking
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    await axios.put('https://localhost:8080/update-products/${productsId}', FormData);
    alert('Product updated succesfully');
    setShow(false);
    setIsBlocking(false);
  }
    catch (error) {
      setError("Data Gagal diubah");
    } finally {
      setLoading(false);
    }
  };
  

  const closeModal = () => {
    setId("");
    setPrice("");
    setTanggal("");
    setShow(false);
    setError(null);
  };

  return (
    <div show= {show} onHide= {closeModal} className='form-input'>
      <Prompt when={setIsBlocking} message= "You have unsaved changes. Are you sure you want to leave?" />
      <h2 className='label-input'>Edit Product</h2>
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
      <form onSubmit={handleSubmit}>
        
      </form>
     
    </div>
  );
};

export default AddProduct;