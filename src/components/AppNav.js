import React from "react";
import { Link } from "react-router-dom";
import "./AppNav.css";
import { useCustomization } from "../contexts/Customization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTruck } from "@fortawesome/free-solid-svg-icons";

const AppNav = () => {
  const { addToCart } = useCustomization();

  return (
    <nav className="main__nav">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          {addToCart && (
            <Link to="/shoppingCart">
              {" "}
              <FontAwesomeIcon icon={faTruck} /> Shopping Cart
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
