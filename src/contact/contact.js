import React from 'react';
import {Link} from 'react-router-dom';
//import Top from '../Navbar'; // Ubah path sesuai dengan struktur folder yang benar
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar,Container } from 'react-bootstrap'
//import image2 from "../Assets/image2.png"; // Ubah path sesuai dengan struktur folder yang benar
import "../contact/style6.css";

function Contact() {
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

<div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="text" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </>
    
  );
}

export default Contact;
