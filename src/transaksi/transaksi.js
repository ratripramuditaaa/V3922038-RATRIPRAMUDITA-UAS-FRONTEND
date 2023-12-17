import React from 'react';
import { Link } from 'react-router-dom';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import '../transaksi/transaksi.css';
import { Container, Nav, Navbar, Card, Row, Col, Button, CardBody } from 'react-bootstrap';
import image3 from "../components/Assets/image3.jpg";


class Transaksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      tanggal: '',
      layanan: '',
      metodePembayaran: '',
      isSubmitted: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    this.setState({ isSubmitted: true });
    alert('Reservasi berhasil disimpan');
  }

  render() {
    const containerStyle = {
      backgroundColor: "#FFFF",
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
      <div className="left-content">
          <img src={image3} alt="image" className="image" />
        </div>
        <form className="form-reservasi" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </label>
        <label>
          No Handphone:
          <input type="no" name="no" onChange={this.handleChange} />
        </label>
        <label>
          Tanggal:
          <input type="date" name="tanggal" onChange={this.handleChange} />
        </label>
        <label>
          Harga:
          <select name = "tiket" onChange={this.handleChange}>
            <option value="">--Kategori Harga--</option>
            <option value="event1">BIRU Rp 100.000</option>
            <option value="event2">KUNING Rp 200.000</option>
            <option value="event3">PINK Rp 350.000</option>
            <option value="event4">SILVER RP. 500.000</option>
            <option value="event5">KUNING RP. 700.000</option>
            <option value="event">HIJAU RP. 750.000</option>
          </select>
        </label>
        <label>
  Jumlah Tiket:
  <input
    type="number"
    name="jumlahTiket"
    min="1"
    onChange={this.handleChange}
    value={this.state.jumlahTiket}
  />
</label>
        <label>
          Metode Pembayaran:
          <select name="metodePembayaran" onChange={this.handleChange}>
            <option value="">--Pilih Metode Pembayaran--</option>
            <option value="kartuKredit">Kartu Kredit</option>
            <option value="transferBank">Transfer Bank</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        {this.state.isSubmitted && <p>Pemesanan Tiket berhasil disimpan</p>}
      </form>

        <div style={footerStyle}>
          <p style={footerTextStyle}>
            &copy; {new Date().getFullYear()} Event.com.
          </p>
        </div>
      </div>
      </>
    );
  }
}

export default Transaksi;