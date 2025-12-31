import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../App.css";
import "../css/About.css";
import "../css/Projects.css";
import Footer from "./Footer";
const Projects = () => {
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
    <div className="projects">
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
      <div className="projectsdetails">
        <h3 className="projects-heading">Explore Our Work Collection</h3>
        <p className="projects-paragraph">
          From entertainment to documentaries, from health content to crime
          investigations, and even financial content, we create scripts that
          generate thousands of views & thousands in revenue. No matter the
          subject, we transform ideas into compelling narratives that captivate
          and inform.
        </p>
      </div>

      <hr className="divider" />

      <div className="projectgallery">
        <div className="container projectsgallery">
          Entertainment
          <div className=" projectgallery-detail grid grid-3">
            <div className="projectgallery-item1 flex">
              <a href="#" className="projectgalleryitem1-link">
                Celebrity
              </a>
            </div>
            <div className="projectgallery-item2 flex">
              {" "}
              <a
                href="#
            
        "
                className="projectgalleryitem2-link"
              >
                Hollywood
              </a>
            </div>
            <div className="projectgallery-item3 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem3-link"
              >
                Tv Shows Breakdown
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider-2" />
      <div className="projectgallery">
        <div className="container projectsgallery">
          Luxury{" "}
          <div className=" projectgallery-detail grid grid-3">
            <div className="projectgallery-item4 flex">
              <a href="#" className="projectgalleryitem4-link">
                Restaurants/Travel
              </a>
            </div>
            <div className="projectgallery-item5 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem5-link"
              >
                Gifts/Products
              </a>
            </div>
            <div className="projectgallery-item6 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem6-link"
              >
                Lifestyle
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider-2" />
      <div className="projectgallery">
        <div className="container projectsgallery">
          Finance/Business{" "}
          <div className=" projectgallery-detail grid grid-3">
            <div className="projectgallery-item7 flex">
              <a href="#" className="projectgalleryitem7-link">
                Personal Finance
              </a>
            </div>
            <div className="projectgallery-item8 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem8-link"
              >
                Investing/Wealth Building
              </a>
            </div>
            <div className="projectgallery-item9 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem9-link"
              >
                Finance News
              </a>
            </div>
          </div>
        </div>

        <hr className="divider-2" />
      </div>

      <div className="projectgallery">
        <div className=" container projectsgallery">
          Documentary{" "}
          <div className=" projectgallery-detail grid grid-3">
            <div className="projectgallery-item10 flex">
              <a href="#" className="projectgalleryitem10-link">
                True Crime/Cold Case
              </a>
            </div>
            <div className="projectgallery-item11 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem11-link"
              >
                Celebrity Rise and Fall
              </a>
            </div>
            <div className="projectgallery-item12 flex">
              {" "}
              <a
                href="#
            "
                className="projectgalleryitem12-link"
              >
                Historical Events
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
