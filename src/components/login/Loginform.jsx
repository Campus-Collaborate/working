// import "./App.css";
import React from "react";
import '../../assets/css/Loginform.css';
import IITGImg from '../../assets/images/LoginImages/IITG.jpg';
import SiteLogo from '../../assets/images/LoginImages/websiteLogo.png';
import OutlookIcon from '../../assets/images/LoginImages/outlookIcon.png';


const Loginform = () => {
  return (
    // width:100%
    <div style={{ position: "absolute", display: "flex", width: "100%" }}>
      <div className="img">
        <img className="cc" src={SiteLogo} alt="cc Logo" />
      </div>
      <div className="wrapper">
        <h1>Create Account</h1>
        <div className="outlookLogin">
          <div className="outlook" style={{ border: "0.25vh solid rgb(205, 201, 201)", padding: "1.5%", margin: "1vw" }}>
            <img className="Outlook-logo" src={OutlookIcon} alt="Outlook Logo" />
            <span className="Outlook-title">Continue with Outlook</span>
          </div>
          <div className="or">-OR-</div>
        </div>
        <form action="">
          <div className="input-box">
            <input type="text" placeholder="Full Name" required></input>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email Address" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>

          <button type="submit">Create Account</button>

          <div className="login-link">
            <p>
              Already have an account ? <a href="#">Login</a>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Loginform;