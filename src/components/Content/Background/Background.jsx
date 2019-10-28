import React from "react";
import "./Background.scss";

const Background = props => {
  return (
    <div className="background" ref={props.sectionRef}>
      <div className="background-title pb-5">Background</div>
      <p>
        Experienced front-end developer specializing in ReactJS web applications
      </p>
      <p>
        Underwent multiple roles in the software engineering industry such as
        software developer and support
      </p>
      <p>Highly experienced in Agile methodologies such as Scrum and Kanban</p>
      <p>
        Able to convert designs in Sketch / Figma into responsive web
        applications using HTML, CSS, SCSS, and ReactJS
      </p>
      <p>
        Effectively presented multiple web application projects unto clients to
        discuss functionality and use-case scenarios
      </p>
    </div>
  );
};

export default Background;
