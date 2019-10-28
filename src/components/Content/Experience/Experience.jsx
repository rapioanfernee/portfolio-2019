/* eslint-disable */

import React, { Component } from "react";

import ExperienceTile from "./ExperienceTile";

import "./Experience.scss";

const Experience = props => {
  const expArray = [
    {
      company: "Innovation Love",
      position: "Front-End Developer",
      description: [
        "Together with a team, developed and supported a web application using ReactJS for Real ",

        "Converted Figma designs into a responsive web application using HTML, CSS, and ReactJS"
      ]
    },
    {
      company: "White Cloak Technologies",
      position: "ReactJS Developer",
      description: [
        "Together with a team, restructured and reworked a web application for back office application using ReactJS with Redux "
      ]
    },
    {
      company: "Accenture",
      position: "Application Development Associate",
      description: [
        "Held a brown-bag session to discuss basics of ReactJS for participants in a local competition",
        "Together with a team, maintained and supported a web application for billing purposes"
      ]
    }
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
