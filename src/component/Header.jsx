import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo logo-pulse">
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
          to="/products"
          className={location.pathname === "/products" ? "active" : ""}
          onClick={() => setMobileMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/company"
          className={location.pathname === "/company" ? "active" : ""}
          onClick={() => setMobileMenuOpen(false)}
        >
          Company
        </Link>

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
