import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import "../css/Header.css";

import Header from "./Header";
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
    /*Navbar*/
    <div className={`nav ${isSticky ? "sticky" : ""}`}>
      <div className="navbar">
        <div className="container flex ">
          <div className="logo">ScriptIt.</div>

          <nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item-three">
                <Link to="/projects" className="nav-link-three">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <button className="hire mobile-hire">
            <a href="mailto:scriptithub@gmail.com">Hire Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
