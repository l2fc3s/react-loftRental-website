import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p>LOFT</p>
            <i class="fab fa-unsplash"></i>
          </Link>
          <div className="mobile-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}

            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links sign-up"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className="signup-button">
              {button && <Button buttonStyle="btn--dark">Sign up</Button>}
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--dark">Sign up</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
