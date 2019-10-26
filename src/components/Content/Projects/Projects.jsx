import React from "react";
import Swiper from "react-id-swiper";

import "./Projects.scss";
import "./ProjectsTile.scss";

const Projects = () => {
  const paramsParent = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  const paramsChild = {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <div className="projects">
      <span>Projects</span>
      <Swiper {...paramsParent}>
        <div className="project">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
          </Swiper>
          <div className="project-title">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <span>Repository</span>
            <span>Visit Page</span>
          </div>
        </div>
        <div className="project">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
          </Swiper>
          <div className="project-title">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <span>Repository</span>
            <span>Visit Page</span>
          </div>
        </div>
        <div className="project">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
          </Swiper>
          <div className="project-title">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <span>Repository</span>
            <span>Visit Page</span>
          </div>
        </div>
        <div className="project">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
          </Swiper>
          <div className="project-title">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <span>Repository</span>
            <span>Visit Page</span>
          </div>
        </div>
        <div className="project">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/op-home.png" alt="op"></img>
            </div>
          </Swiper>
          <div className="project-title">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <span>Repository</span>
            <span>Visit Page</span>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
