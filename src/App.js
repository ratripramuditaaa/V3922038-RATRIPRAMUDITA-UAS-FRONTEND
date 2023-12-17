import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/login';
import Body from './components/landing/body';
import Reg from './components/Reg/reg';
import About from './components/About/about';
import Contact from './contact/contact';
import Profil from './components/profil/profil';
import Event from './components/Event/event';
import Products from './riwayat/products';
//import Edit from './components/riwayat/EditProduct';
import AddProduct from './riwayat/addProducts';
import Transaksi from './transaksi/transaksi';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/event" element = {<Event/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/transaksi" element={<Transaksi/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;