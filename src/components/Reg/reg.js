import React from 'react';
import './style1.css';
import facebookImage from '../Assets/facebook.png'; // Perhatikan huruf besar pada "Assets"
import google from '../Assets/google.png';
import {Link} from 'react-router-dom';


const Reg =() => {
  return(
    <div className="reg-container">
      <h2>REGRISTRASI</h2>
      <p>Sudah Punya Akun?<Link to="/login">Masuk</Link></p>
      <form>
        <div className="input-container">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="input-container">
          <label>Nama:</label>
          <input type="email" />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" />
        </div>
        <Link to="/login">
        <button>Daftar</button></Link>
      </form>
      <p>or</p>
      <div className="social-buttons">
        <img src={facebookImage} alt="Facebook" />
        <img src={google} alt="Google" />
      </div>
    </div>
  )
}

export default Reg;