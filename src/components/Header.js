import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Header.css";

const Header = () => {
  return (
    /*Welcome*/

    <div className="welcome ">
      <div className="container">
        <div className="grid grid-2">
          <div>
            <h1 className="welcome-vibe">
              The Go-To Scriptwriting Brand for Successful Content Creators.
            </h1>

            <p className="welcome-button flex">
              <button className="welcome-button1">
                <Link to="/projects" className="welcome-link">
                  View Projects <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </button>
              <span className="welcome-button2">Work With Us</span>
            </p>
          </div>
          <div className="scene">
            <div className="logo-container">
              <div className="logo2 youtube">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="logo2 tiktok">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
