import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navBar">
        <div className="navBar-container">
          <Link to="/" className="navBar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nave-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nave-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nave-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
