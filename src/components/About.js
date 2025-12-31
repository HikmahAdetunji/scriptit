import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/About.css";

import Footer from "./Footer";
const About = () => {
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
    /*About*/
    <div className="about">
      <div className="nav-about">
        <div className={`navbar-about ${isSticky ? "sticky" : ""}`}>
          <div className="container flex nav-inner">
            <div className="logo">ScriptIt.</div>

            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
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
              <ul className="navbar-nav">
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
            <button className="hire-about mobile-hire">
              <a href="mailto:scriptithub@gmail.com">Hire Us</a>
            </button>
          </div>
        </div>
      </div>
      <div className="aboutdetails-0">
        <h2 className="about-heading">About ScriptIt.</h2>
        <p className="about-paragraph">
          For YouTube scripts that connect emotionally, entertain deeply, and
          deliver real value without a single fluff. Every script is crafted
          with originality, clarity, and authentic storytelling.
        </p>
      </div>
      <hr className="divider" />
      <div
        className="
      aboutdetails-1"
      >
        🎯 Our Missions
      </div>
      <div className="container grid  aboutdetails-items">
        <div className="aboutdetails-item1">
          <span className="about-icon"> 🎬 </span>Elevate digital creators with
          authentic scripts that entertain, inspire, educate, and resonate with
          their viewers{" "}
        </div>
        <div className="aboutdetails-item2">
          <span className="about-icon">🔊</span> Tailored scripts that are
          written in your channel's unique voice and style, ensuring that your
          content stands out in the crowded internet space.
        </div>
        <div className="aboutdetails-item3">
          <span className="about-icon">🚀</span>On-time delivery of scripts, so
          you can stay on schedule and keep your content pipeline flowing
          smoothly.
        </div>
        <div className="aboutdetails-item4">
          <span className="about-icon">🤝</span> A collaborative and
          communicative approach that involves working closely with you to
          understand your vision and goals for the channel, ensuring that the
          final script meets your expectations.
        </div>
      </div>
      <hr className="divider1" />
      <div className="aboutdetails-2">
        <h1 className="aboutdetails2-heading">🌍 Our Vision</h1>
        <p className="aboutdetails2-paragraph">
          To lead the global Youtube industry in providing top-notch
          scriptwriting services that empower content creators to captivate
          their audiences and achieve unparalleled success.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
