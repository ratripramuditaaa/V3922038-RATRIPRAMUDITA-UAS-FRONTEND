import React from 'react';
import './style3.css';
import facebookImage from '../Assets/facebook.png'; // Perhatikan huruf besar pada "Assets"
import google from '../Assets/google.png';
import {Link} from 'react-router-dom';

const Login =() => {
  return(
    <div className="login-container">
      <h2>Login</h2>
      <p>Belum punya akun? <Link to="/reg">Daftar</Link></p>
      <form>
        <div className="input-container">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" />
        </div>
        <Link to="/">
        <button>Login</button>
      </Link>
      </form>
      <p>or</p>
      <div className="social-buttons">
        <img src={facebookImage} alt="Facebook" />
        <img src={google} alt="Google" />
      </div>
    </div>
  )
}

export default Login;
