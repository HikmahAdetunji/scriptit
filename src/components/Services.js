import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Header.css";
import "../css/Services.css";
const Services = () => {
  return (
    /*Services*/

    <div className="services ">
      <div className="container">
        <div className="grid grid-3">
          <div className="script-types">
            <h2 className="script-types-heading">Script Types We Handle.</h2>
            <ul className="services-offered">
              <li className="script-types-item">Educational/Documentary </li>
              <li className="script-types-item">Entertainment </li>
              <li className="script-types-item">Health </li>
              <li className="script-types-item">Top 10 lists & listicles </li>
              <li className="script-types-item">Crime & Iceberg</li>
              <li className="script-types-item">History </li>
              <li className="script-types-item">Beauty & Fashion </li>
              <li className="script-types-item">Personal Development </li>
              <li className="script-types-item">Finance & Economy</li>
              <li className="script-types-item">Tech & AI </li>
            </ul>
          </div>
          <div className="services-handle">
            <h2 className="services-heading">Services We Offer.</h2>
            <ul>
              <li className="services-item">Custom-Fit Scripts</li>
              <li className="services-item">Captivating Storytelling</li>
              <li className="services-item">Deep Research</li>
              <li className="services-item">Meticulous Attention to Detail</li>
              <li className="services-item">Reliable and Professional</li>
              <li className="services-item">True Collaboration</li>
              <li className="services-item">Growth-Focused Approach</li>
            </ul>
          </div>

          <div className="support">
            <h2 className="production-support">Full Production Support.</h2>
            <ul>
              <li className="production-support-item">
                Video structure & pacing guidance
              </li>
              <li className="production-support-item">
                Hook optimization for retention
              </li>
              <li className="production-support-item">
                SEO-friendly titles & descriptions
              </li>
              <li className="production-support-item">
                Voiceover timing notes
              </li>
              <li className="production-support-item">
                B-roll and visual cues inclusion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
