import React from "react";
import "../App.css";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerbody">
        <div className="container grid grid-2">
          <div className="footercontact">
            <h3 className="footercontact-0">Contact us</h3>
            <p className="footercontact-1">
              <a href="mailto:scriptithub@gmail.com">Mail Us</a>
            </p>
            <p className="footercontact-1">
              <a href="#">Reach us on LinkedIn</a>
            </p>
          </div>
          <div className="footerquicknav">
            <h3 className="footerquicknav-0">Quick Navigations</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>

              <li>
                <a
                  href="
                    portfolio.html"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerbody-1">ScriptIt. Copyright &copy; 2025</div>
    </div>
  );
};

export default Footer;
