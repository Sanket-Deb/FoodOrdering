import { LOGO_URL } from "./utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnIcon, setBtnIcon] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnIcon === "LogIn" ? setBtnIcon("LogOut") : setBtnIcon("LogIn");
            }}
          >
            {btnIcon}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
