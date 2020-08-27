/* eslint-disable */

import React, { Component } from "react";

import ExperienceTile from "./ExperienceTile";

import "./Experience.scss";

const Experience = (props) => {
  const expArray = [
    {
      company: "Samsung R&D Institute Philippines",
      position: "Engineer",
      description: [
        "Developed and enhanced a dashboard web application using ReactJS for network analytics",
        "Created unit tests for multiple chart components and documented usage usingStorybook and React Styleguidist",
        "Created and published a local library of charts based on Highcharts.js to the company’s internal NPM library",
      ],
    },
    {
      company: "Innovation Love",
      position: "Front-End Developer",
      description: [
        "Enhanced and developed a web application using ReactJS and MeteorJS for real estate purpose",
        "Converted design templates from Figma into HTML, CSS, and JavaScript code",
        "Restructured the company’s website using ReactJS.",
      ],
    },
    {
      company: "Accenture",
      position: "Application Development Associate",
      description: [
        "Developed an analytics dashboard for a project focused on IoT for monitoring a truck’s statistics using SAP UI5",
      ],
    },
  ];
  return (
    <div className="experience" ref={props.sectionRef}>
      <div className="experience-title">Experience</div>
      <div className="experience-container">
        {expArray.map((exp, index) => (
          <ExperienceTile key={index} {...exp}></ExperienceTile>
        ))}
      </div>
    </div>
  );
};

export default Experience;
