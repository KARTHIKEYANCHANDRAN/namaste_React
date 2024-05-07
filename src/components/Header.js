import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [LoginButton, setLoginButton] = useState("Login"); // array destructuring , useState hook

  const {loginusername} = useContext(UserContext) ;

  const cartItems = useSelector((store)=> store.cart.items)

  return (
    <div className="m-0 w-100% flex justify-between bg-violet-300 relative shadow-md">
      <div className="p-1">
        <Link to="/">
          {" "}
          <img
            className="logo"
            src={LOGO_URL}
            width="150px"
            height="120px"
            alt="scooter"
          />
        </Link>
      </div>

      <div className="nav">
        <ul className="flex list-none">
          <li className="text-lg font-semibold p-3 py-12">
            {" "}
            Online Status{useOnlineStatus() ? " 🟢 " : " 🔴 "}{" "}
          </li>
          <li className="text-lg p-3 py-12 font-bold">
            <Link className="no-underline font-semibold hover:underline" to="/">
              Home
            </Link>
          </li>
          <li className="text-lg p-3 font-semibold py-12">
            <Link className="no-underline hover:underline" to="/about">
              About Us
            </Link>
          </li>
          <li className="text-lg p-3 font-semibold py-12">
            <Link className="no-underline hover:underline" to="/contact">
              Contact
            </Link>
          </li>
          <li className="text-lg font-semibold p-3 py-12">
            <Link className="no-underline hover:underline" to="/cart">
              Cart-({cartItems.length} items)
            </Link>
          </li>
          <button
            id="loginButton"
            className="text-lg p-3 font-semibold py-12 no-underline hover:underline"
            onClick={() => {
              LoginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {LoginButton}
          </button>
          <li className="text-lg font-semibold p-3 py-12"> {loginusername} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
