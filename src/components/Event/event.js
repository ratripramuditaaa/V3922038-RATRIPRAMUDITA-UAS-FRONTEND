import React from 'react';
import { Container, Nav, Navbar, Card, Row, Col, Button, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import image2 from '../Assets/image2.png';
import postermusik1 from '../Assets/postermusik1.jpeg';
import postermusik2 from '../Assets/postermusik2.jpeg';
import postermusik3 from '../Assets/postermusik3.jpeg';
import postermusik4 from '../Assets/postermusik4.jpeg';
import postermusik5 from '../Assets/postermusik5.jpeg';
import postermusik6 from '../Assets/postermusik6.jpeg';
import postermusik7 from '../Assets/postermusik7.jpeg';
import postermusik8 from '../Assets/postermusik8.jpeg';
import postermusik9 from '../Assets/postermusik9.jpeg';
import Top from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function Event () {
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

    <div>
      <div style={{margin: '30px'}}>
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
        <div style={{margin: '30px'}}>
          <Row className='justify-content-center' style={{margin: '10px'}}>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik4}/>
                <Card.Body>
                  <Card.Text>2 Desember 2023</Card.Text>
                  <Card.Text>Artis : Adam scoot, David Cross, dan masih banyak lagi</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                <Button>BOOK NOW</Button>
                </Link>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik5}/>
                <Card.Body>
                  <Card.Text>16 Desember 2023</Card.Text>
                  <Card.Text>Artis : Pamungkas, D'Masiv, dan masih banyak lagi</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                <Button>BOOK NOW</Button>
                </Link>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik6}/>
                <Card.Body>
                  <Card.Text>31 Desember 2023</Card.Text>
                  <Card.Text>Artis : NDX, Guyon Waton, Denny Cakna dan masih banyak lagi</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                <Button>BOOK NOW</Button>
                </Link>
              </Card>
            </Col>
          </Row>
      </div>
      <div style={{margin: '30px'}}>
          <Row className='justify-content-center' style={{margin: '10px'}}>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik7}/>
                <Card.Body>
                  <Card.Text>5 Januari 2024</Card.Text>
                  <Card.Text>Artis : HIVI, Idgitaf dan masih banyak lagi</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                <Button>BOOK NOW</Button>
                </Link>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik8}/>
                <Card.Body>
                  <Card.Text>22 Januari 2024</Card.Text>
                  <Card.Text>Artis : Band lokal Madiun</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                <Button>BOOK NOW</Button>
                </Link>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-service'>
                <Card.Img className='card-img' src={postermusik9}/>
                <Card.Body>
                  <Card.Text>15 November 2023</Card.Text>
                  <Card.Text>Artis : Tulus dan masih banyak lagi</Card.Text>
                  <Card.Text>16.00</Card.Text>
                </Card.Body>
                <Link to="/transaksi" style={{margin: '10px'}}>
                <Button>BOOK NOW</Button>
                </Link>
              </Card>
            </Col>
          </Row>
      </div>
    </div>
    </>
  )
    
  };

  export default Event;
  