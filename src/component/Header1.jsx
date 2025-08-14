import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header2.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header className="header">
      <div className={`logo logo-pulse ${animate ? "logo-enter" : ""}`}>
        <Link to="/">
          <img src="/Picture2.png" alt="Logo" className="logo-icon" />
        </Link>
      </div>

      <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/About"
          className={location.pathname === "/About" ? "active" : ""}
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/Products"
          className={location.pathname === "/Products" ? "active" : ""}
          onClick={() => setMobileMenuOpen(false)}
        >
          Services
        </Link>
        {/* <Link
          to="/Company"
          className={location.pathname === "/Company" ? "active" : ""}
          onClick={() => setMobileMenuOpen(false)}
        >
          Company
        </Link> */}

        <Link
          to="/contact"
          className="contact-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>

      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="top-bar" />
        <span className="middle-bar" />
        <span className="bottom-bar" />
      </div>
    </header>
  );
};

export default Header;
