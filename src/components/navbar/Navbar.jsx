import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-logo">leapcom</div>
      </Link>
      <Link to="/cart">
        {" "}
        <i class="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
}

export default Navbar;
