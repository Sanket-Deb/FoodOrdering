import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnIcon, setBtnIcon] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "✅" : "🚩"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnIcon === "Login" ? setBtnIcon("Logout") : setBtnIcon("Login");
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
