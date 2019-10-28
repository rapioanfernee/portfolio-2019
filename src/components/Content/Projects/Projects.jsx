import React from "react";
import Swiper from "react-id-swiper";

import { Button } from "reactstrap";

import "./Projects.scss";
import "./ProjectsTile.scss";

const Projects = props => {
  const paramsParent = {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
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
    <>
      <div className="projects d-none d-lg-flex" ref={props.sectionRef}>
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
              <Button color="secondary" size="large">
                Visit Page
              </Button>
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
              <Button color="secondary" size="large">
                Visit Page
              </Button>
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
              <Button color="secondary" size="large">
                Visit Page
              </Button>
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
              <Button color="secondary" size="large">
                Visit Page
              </Button>
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
              <Button color="secondary" size="large">
                Visit Page
              </Button>
            </div>
          </div>
        </Swiper>
      </div>
      {/* Divider */}
      <div
        className="projects d-lg-none d-flex flex-column align-items-center  pt-5 pt-lg-0"
        ref={props.sectionRef}
      >
        <span>Projects</span>

        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom border-top border-secondary">
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
          <div className="project-title pt-0">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <Button color="secondary" size="large">
              Visit Page
            </Button>
          </div>
        </div>
        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom  border-secondary">
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
          <div className="project-title pt-0">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <Button color="secondary" size="large">
              Visit Page
            </Button>
          </div>
        </div>
        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom border-secondary">
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
          <div className="project-title pt-0">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <Button color="secondary" size="large">
              Visit Page
            </Button>
          </div>
        </div>
        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom border-top border-secondary">
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
          <div className="project-title pt-0">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <Button color="secondary" size="large">
              Visit Page
            </Button>
          </div>
        </div>
        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom border-secondary">
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
          <div className="project-title pt-0">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <div className="project-buttons">
            <Button color="secondary" size="large">
              Visit Page
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
