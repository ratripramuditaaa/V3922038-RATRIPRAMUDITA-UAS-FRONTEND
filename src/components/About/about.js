import React from 'react';
import {Link} from 'react-router-dom';
import Top from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, } from 'react-bootstrap'
import image2 from "../Assets/image2.png";
import "../About/style2.css";

function About() {
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
                        <Nav.Link href="about">ABOUT US</Nav.Link>
                        <Nav.Link href="contact">CONTACT</Nav.Link>
                        <Nav.Link href="profil">PROFIL</Nav.Link>

                    </Nav>
            
                </Navbar.Collapse>
            
        </Navbar>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        event.com adalah salah satu website yang memudahkan warga sekitar madiun untuk 
        mengetahui event apa saja yang ada di madiun, dimulai dari konser, pawai,pameran dan lain-lain.  
        Di website ini warga madiun bisa memesan tiket konser untuk band,penyanyi atau apapun yang akan
        mengadakan konser di Madiun.
         
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
