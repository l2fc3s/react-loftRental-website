import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Button } from "./Button";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const navbarShadow = () => {
    window.scrollY >= 60 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", navbarShadow);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <HashLink
            smooth
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <p>LOFT</p>
            <i className="fab fa-unsplash"></i>
          </HashLink>

          <div className="mobile-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="#about-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#gallerySection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#footer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="#footer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#footer"
                className="nav-links sign-up"
                onClick={closeMobileMenu}
              >
                Sign Up
              </HashLink>
            </li>
            <li className="signup-button">
              {button && (
                <HashLink smooth to="#footer">
                  <Button buttonStyle="btn--dark">Sign up</Button>
                </HashLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
