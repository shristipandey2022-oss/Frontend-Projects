import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam a
            dolores cum eveniet, nostrum fugit laboriosam optio nihil placeat,
            qui doloribus excepturi ducimus sunt eaque quas ratione aspernatur
            deserunt earum?
          </p>
          <div className="footer-socials">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH!</h2>
            <ul>
                <li>+1-345-667-890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="copyright-text">Copyright 2024 © Tomato.com - All rights reserved.</p>
    </div>
  );
};

export default Footer;
