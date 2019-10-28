import React from "react";

import "./ExperienceTile.scss";

const ExperienceTile = props => {
  console.log(props);
  return (
    <div className="experiencetile py-4">
      <div className="experiencetile-company">{props.company}</div>
      <div className="experiencetile-position py-2">{props.position}</div>
      {props.description.map((desc, index) => (
        <p className="experiencetile-description" key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
};

export default ExperienceTile;
