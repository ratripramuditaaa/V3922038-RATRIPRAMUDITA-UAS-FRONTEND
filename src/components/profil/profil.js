import React from 'react';
import { Link } from 'react-router-dom';
import './style5.css';
import LOGO from '../Assets/akun.png'
import Top from '../Navbar'
import { Container, Nav, Navbar, Card, Row, Col, Button, CardBody } from 'react-bootstrap';

const Profil = () => {

  const containerStyle = {
    backgroundColor: '#ffffff',
    position: 'relative',
    width: '100%',
    minHeight: "100vh",
  };

  const titleStylee = {
    fontSize: "40px",
    marginBottom: "50px",
    textAlign: "center",
    marginTop: "70px",
  };
  const buttonStyle = {
    fontSize: "15px",
    padding: "10px 90px",
    backgroundColor: "#779EE9",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
    display: "block", // Ensures the button is treated as a block-level element
    margin: "auto", // Centers the button horizontally
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

      <h1 style={titleStylee}>YOUR PROFILE!</h1>
      <div className="profile-container">
      <div className="skills--section--img">
                <img src={LOGO} alt="Product Chain" />
              </div>
        <div className="info-container">
          <div className="name">RATRI PRAMUDITA</div>
          <div className="email">Email: ratripramudita77@gmail.com</div>
        </div>

        <div className="button-container">
          <Link to="/login" style={buttonStyle}>
            LOG OUT
          </Link>
        </div>
      </div>
      </>

  );
};

export default Profil;