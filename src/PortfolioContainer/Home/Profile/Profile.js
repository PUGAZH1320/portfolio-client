import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../Utilities/ScrollService";

export default function () {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/thamizh.bharathi.5">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/thamizh-bharathi-022a64168/">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/thamizh_bharathi1320/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/thamizh-bharathi-022a64168/">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Thamizh Bharathi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Mechatronics Eng😎",
                    1000,
                    "Tinkerer 😁",
                    1000,
                    "Mern stack Dev ✌️",
                    1000,
                    "Optimistic 🙂",
                    1000,
                    "React Dev ✨",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                There are no right decision,Take decision and Make it Right!.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Contact Me</button>
            <a href="1.pdf" download="Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
