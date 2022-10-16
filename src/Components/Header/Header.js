import React from "react";
import Logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <img src={Logo} alt="sneakers-zone" className="logo" />
        <div>
          <a href="#">Shop</a>
          <a href="#">Orders</a>
          <a href="#">Inventory</a>
          <a href="#">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
