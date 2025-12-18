import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import "./LoginPopUp.css";
const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')

    }
  }, [])
  return (
    <div className="login-popup" >
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <button onClick={() => setShowLogin(false)}>
            <RxCross2 />
          </button>
          </div>
          <div className="login-popup-input">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Full Name" required />
            )}

            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button className="create-account-btn">
            {currentState === "Sign Up" ? "Create Account" : "Sign Up"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & Privacy Policy.</p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
            </p>
          )}
       
      </form>
    </div>
  );
};

export default LoginPopUp;
