import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Projectsoverview.css";
const Projectsoverview = () => {
  return (
    /*Projectsoverview*/

    <div className="projectsoverview">
      <h2 className="project-heading">A Glimpse Of Past Works</h2>
      <div className="projectoverview">
        <div className="projectoverview-item0">
          <a
            href="https://docs.google.com/document/d/12DplxlMpCuIi6jFcoUMHIOzJ27hjdU7i2RjNox1fmGM/edit?usp=drivesdk"
            className="projectoverviewitem0-link"
          >
            5 Dirty Cops Get Brutal Karma In The Courtroom
          </a>
        </div>

        <div className="container grid grid-3 mt-2 project-scroll snaps-inline">
          <div className="projectoverview-item1 flex">
            <a
              href="https://docs.google.com/document/d/1-YJDOF117dJAATJ8VAmzqzYiL4Fy4aV23nE2DW6qczE/edit?usp=drivesdk
                  "
              className="projectoverviewitem1-link"
            >
              What Has Happened To The UK's Economy
            </a>
          </div>
          <div className="projectoverview-item2  flex">
            <a
              href="https://docs.google.com/document/d/1o5uwkY_4QC-H05jDYH116f2wAMXf3VQhRRjl0FCrTbY/edit?usp=drivesdk"
              className="projectoverviewitem2-link"
            >
              Inside the Rise and Fall: The Untold Story of SunnyV2's YouTube
              Empire.
            </a>
          </div>
          <div className="projectoverview-item3 flex">
            <a
              href="https://docs.google.com/document/d/18EYSwFcbcL8InI8_6vdbwXrUw_ILF2RK-fSmz3fQH6Q/edit?usp=drivesdk"
              className="projectoverviewitem3-link"
            >
              Exclusive look: Inside the world's most expensive luxury hotel
              suite.
            </a>
          </div>
          <div className="projectoverview-item4 flex">
            <a
              href="https://docs.google.com/document/d/1hfGGvHroLnitHRePp86n6xU5cwhDLitV9od45nfaFzI/edit?usp=drivesdk
                  
          "
              className="projectoverviewitem4-link"
            >
              Top Ten Plymouth Cars
            </a>
          </div>
          <div className="projectoverview-item5 flex">
            <a
              href="https://docs.google.com/document/d/1NO_z23BA63zP8wJTUYWc5Zjwe2e2z6A02BKLapUpIco/edit?usp=drivesdk
          "
              className="projectoverviewitem5-link"
            >
              The Rise of Bailey Sarian (Documentary)
            </a>
          </div>
          <div className="projectoverview-item6 flex">
            <a
              href="https://docs.google.com/document/d/1TsDumhPYp5QN_Kt7OJoGiq8N8LvQFrvXeBaej2IgI9w/edit?usp=drivesdk"
              className="projectoverviewitem6-link"
            >
              The brutal execution of Velma Barfield.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectsoverview;
