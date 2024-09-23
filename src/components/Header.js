import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnIcon, setBtnIcon] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🚩"}</li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnIcon === "Login" ? setBtnIcon("Logout") : setBtnIcon("Login");
            }}
          >
            {btnIcon}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
