import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../riwayat/product.css';
import { Container, Nav, Navbar, Card, Row, Col, Button, CardBody,Modal,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  };

  const footerStyle = {
    backgroundColor: "#ABC1E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
  };

  const footerTextStyle = {
    fontSize: "18px",
    color: "#FFFFFF",
  };

  // Create media query for smaller screens
  const mediaQuery = `@media (max-width: 768px) {
    img {
      max-width: 80%; // Adjust the maximum width as needed
    }
  }`;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = async () => {
    const products = await axios.get('http://localhost:8080/products');
    setProducts(products.data.data);
  }

  const deleteProducts = async (id) => {
      await axios.delete(`http://localhost:8080/delete-products/${id}`);
      // getProducts();
  }

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const EditProduct  = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const putData = await axios.put(
        `http://localhost:8080/update-products/${id}`,
        {
          title : title,
          price : price
        }
      );

      alert(putData.data.message);
      window.location.reload();
    } catch (error) {
      setError("Data Gagal diubah");
    } finally {
      setLoading(false);
    }
  };
  const showModal = (data) => {
    setId(data.id);
    setTitle(data.title);
    setPrice(data.price);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setTitle("");
    setPrice("");
    setShow(false);
    setError(null);
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{width:'100%'}
            }>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-lg-0"
                        style={{ maxHeight: '250px', marginLeft:'30px' }}
                    >
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="event">EVENT</Nav.Link>
                        <Nav.Link href="/about">ABOUT US</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                        <Nav.Link href="/profil">PROFIL</Nav.Link>

                    </Nav>
            
                </Navbar.Collapse>
            
        </Navbar>

    <div style={containerStyle}>

    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Form Update Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={EditProduct}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="int"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="px-4" disabled={loading}>
            {loading ? 'Updating...' : 'Update'}
          </Button>
          {error && <p className="text-danger">{error}</p>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} disabled={loading}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

      <div>
         <caption className="table-caption">Price Tiket Konser</caption>
         <Link to ={'/addProduct'} className='custom-button'> Tambah Data </Link>
        <table className="table-container">
        <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((products, index) => {
             return(
              <tr key={products.id}>
                <td>{index + 1}</td>
                <td>{products.title}</td>
                <td>{products.price}</td>
                <td>
                  <button onClick={() => showModal(products)} className='custom-button'>edit</button>
                  <button onClick={() => deleteProducts(products.id)} className='custom-button'>Hapus</button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} Event.com.
        </p>
      </div>

      <style>{mediaQuery}</style>
    </div>
    </>
  );
}

export default Products;
