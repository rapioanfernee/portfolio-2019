import React from "react";
import "./Skills.scss";

const Skills = props => {
  const proficientSkills = [
    {
      img: "/portfolio/html5-1.png",
      name: "HTML"
    },
    {
      img: "/portfolio/css3.png",
      name: "CSS"
    },
    {
      img: "/portfolio/js-1.png",
      name: "JavaScript"
    },
    {
      img: "/portfolio/react-1.png",
      name: "ReactJS"
    },
    {
      img: "/portfolio/redux-1.png",
      name: "Redux"
    }
  ];

  const knowledgeableSkills = [
    {
      img: "/portfolio/sass-1.png",
      name: "SASS"
    },
    {
      img: "/portfolio/bootstrap-1.png",
      name: "Bootstrap"
    },
    {
      img: "/portfolio/java-1.png",
      name: "Java"
    },
    {
      img: "/portfolio/figma-1.png",
      name: "Figma"
    },
    {
      img: "/portfolio/git-1.png",
      name: "Git"
    }
  ];
  return (
    <div className="skills" ref={props.sectionRef}>
      <div className="skills-title">Skills</div>
      <div className="skills-section pb-5">
        <div className="skills-section-subtitle pt-3 pb-5">
          Proficiency in web technologies such as the following:
        </div>
        <div className="skills-section-items">
          {proficientSkills.map((skill, index) => (
            <div key={index} className="skills-item mb-4">
              <div className="skills-photo-container">
                <img src={skill.img} alt={skill.name}></img>
              </div>
              <div className="skills-skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-section pb-5">
        <div className="skills-section-subtitle pt-3 pb-5">
          Knowledgeable on other technologies such as:
        </div>
        <div className="skills-section-items">
          {knowledgeableSkills.map((skill, index) => (
            <div key={index} className="skills-item mb-4">
              <div className="skills-photo-container">
                <img src={skill.img} alt={skill.name}></img>
              </div>
              <div className="skills-skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
