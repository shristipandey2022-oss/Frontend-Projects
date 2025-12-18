import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const location = useLocation();
  const isHomePage = location.pathname === '/'
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={assets.logo} alt="" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setMenu("Home")}
          className={menu === "Home" && isHomePage ? "active" : null}
        >
          Home
        </Link>
        <a
          href={isHomePage ? "/#explore-menu" : null}
          onClick={() => setMenu("Menu")}
          className={`${menu === "Menu" && isHomePage ? "active" : null} ${!isHomePage ? 'inactive' : ''}`}
        >
          Menu
        </a>
        <a
          href={isHomePage ? "#app-download" : null}
          onClick={() => setMenu("Mobile App")}
          className={`${menu === "Mobile App" && isHomePage ? "active" :null} ${!isHomePage ? 'inactive' : ''}`}
        >
          Mobile App
        </a>
        <a
          href={isHomePage ? "#footer" : null}
          onClick={() => setMenu("Contact Us")}
          className={`${menu === "Contact Us" && isHomePage ? "active" : null} ${!isHomePage ? 'inactive' : ''}`}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <CiSearch className="search-icon" />
        <div className="cart">
          <Link to={"/cart"}>
            <CiShoppingCart className="cart-icon" />
            <div className="dot"></div>
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
