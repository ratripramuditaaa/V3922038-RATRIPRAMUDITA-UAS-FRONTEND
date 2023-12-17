import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Nav, Navbar, Card, Row, Col, Button, CardBody,} from 'react-bootstrap';
import image2 from '../Assets/image2.png';
import './style.css';
import Top from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import postermusik1 from '../Assets/postermusik1.jpeg';
import postermusik2 from '../Assets/postermusik2.jpeg';
import postermusik3 from '../Assets/postermusik3.jpeg';

function Body() {
  const buttonStyle = {
    fontSize: "24px",
    padding: "10px 20px",
    backgroundColor: "#779ee7",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
  };
  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Added to center content vertically
    textAlign: "center", // Added to center text horizontally
    padding: "20px",
  };
  const footerStyle = {
    backgroundColor: "#779ee7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
  };

  const footerTextStyle = {
    fontSize: "18px",
    color: "#FFFFFF",
  };
  return(
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
                    <Link to="/login">
                        <Button
                        style={{ background: '#779EE9', color: '#f2f0f4', width: '100px', border: 'none', borderRadius: '5px' }}
                        >
                            Log in
                        </Button>
                    </Link>
            
                </Navbar.Collapse>
            
        </Navbar>

      <div>
      <div className="body">
        <div className="left-content">
          <img src={image2} alt="image" className="body-image" />
        </div>
        <div className="center-content">
          <h2>Welcome to Event.com</h2>
          <div className="ticket-details">
          <Link to="/products" style={buttonStyle}>
          PRICE
          </Link>
           {/* Menampilkan harga dalam button */}
          </div>
        </div>
      </div>

    <div className="ticket-details">
          <Link to="/event" style={buttonStyle}>
            SEE ALL
          </Link>
          </div>
    <div>
    <Row className='justify-content-center' style={{margin: '10px'}}>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik1}/>
                <Card.Body>
                  <Card.Text>5 November 2023</Card.Text>
                  <Card.Text>Artis : Pamungkas, Tulus, Nadin Amizah</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                  <Button>BOOK NOW</Button></Link>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik2}/>
                <Card.Body>
                  <Card.Text>15 November 2023</Card.Text>
                  <Card.Text>Artis : Michael andarde, Jefferson, dan masih banyak lagi</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
  <Button>BOOK NOW</Button>
</Link>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik3}/>
                <Card.Body>
                  <Card.Text>20 November 2023</Card.Text>
                  <Card.Text>Artis : Blackpink, Seventeen, Baby Monster dan masih banyak artis yang lain</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
  <Button>BOOK NOW</Button>
</Link>
              </Card>
            </Col>
          </Row>
        </div>
    <div>
    <section style={contentStyle}>
  <div className="combined-wrapper padding-with-bg">
    <div className="text-wrapper">About Us!</div>
    <p className="blog-description">
      event.com adalah salah satu website yang memudahkan warga sekitar Madiun untuk mengetahui 
      event apa saja yang ada di Madiun, dimulai dari konser, pawai, pameran, dan lain-lain. 
      Di website ini, warga Madiun bisa memesan tiket konser untuk band, penyanyi, atau apapun 
      yang akan mengadakan konser di Madiun.
    </p>
  </div>
</section>
    </div>
    <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} Event.com.
        </p>
      </div>

      </div>

    </>
  )
}

export default Body;
