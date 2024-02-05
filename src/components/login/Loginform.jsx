// import "./App.css";
import React from "react";
import './Loginform.css';

const Loginform = () => {
  return (
    // width:100%
    <div style={{ position: "absolute", display: "flex", width: "100%" }}> 
      <div className="img">
        <img className="cc" src={require('./Group 18.png')} alt="cc Logo" />
      </div>
      <div className="wrapper">
        <h1>Create Account</h1>
        <div className="outlookLogin">
          <div className="outlook" style={{border: "0.25vh solid rgb(205, 201, 201)", padding: "1.5%", margin: "1vw"}}>
          <img className="Outlook-logo" src={require('./logo-outlook-34044.png')} alt="Outlook Logo" />
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