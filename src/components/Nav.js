import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Nav.css";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isSticky ? "sticky" : ""}`}>
      <div className="navbar">
        <div className="container flex nav-inner">
          <div className="logo">ScriptIt.</div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""} ${
              isSticky ? "sticky" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            {menuOpen && (
              <div
                className="menu-overlay"
                onClick={() => setMenuOpen(false)}
              />
            )}
          </div>

          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <button
              className="close-menu"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="navbar">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>

              <li className="nav-item-three">
                <Link
                  to="/projects"
                  className="nav-link-three"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="hire mobile-hire"
            onClick={() => setMenuOpen(false)}
          >
            <a href="mailto:scriptithub@gmail.com">Hire Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
