/*eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../riwayat/Add.css';

const AddProduct= () => {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  };

  const contentContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
  };

  const contentStyle = {
    textAlign: "center",
    padding: "150px",
    maxWidth: "50%",
  };

  const buttonStyle = {
    fontSize: "15px",
    padding: "5px 10px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
  };

  const footerStyle = {
    backgroundColor: "#ABC1E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    width: "100%",  
    position: "fixed", 
    bottom: 0,  
  };

  const footerTextStyle = {
    fontSize: "18px",
    color: "#FFFFFF",
  };

  
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
  

  const handlesSubmit = async (e) => {
    if (price === "" || title === "") {
        alert('Terjadi Kesalahan, Silahkan Coba Lagi!');
    } else {
        try {
            e.preventDefault();
            await axios.post('http://localhost:8080/insert-products', {
                title: title,
                price: price
            });
            window.location.href = '/products';  // Corrected line
            
            alert('Berhasil Ditambahkan!');
        } catch (error) {
            alert('Terjadi Kesalahan, Silahkan Coba Lagi!');
            console.error('Error adding products:', error);
        }
    }
};

  
  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <form style={contentStyle} onSubmit={handlesSubmit}>
          <fieldset>
            <legend className="table-caption">FORM INPUT DATA</legend>
            <div className="field">
              <label htmlFor="title" className="label">
                Konser
              </label>
              <input
                type="text"
                id="title"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan Konser"
              />
            </div>
            <div className="field">
              <label htmlFor="price" className="label">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Masukkan harga tiket"
              />
            </div>
            <div>
              <button type="submit" style={buttonStyle}>
                Tambahkan Data
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} Event.com.
        </p>
      </div>
    </div>
  );

};

export default AddProduct;
