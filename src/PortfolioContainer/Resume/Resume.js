import React, { useEffect, useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : " "}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const skillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "Drone", ratingPercentage: 95 },
    { skill: "AGV", ratingPercentage: 65 },
    { skill: "Arduino", ratingPercentage: 54 },
    { skill: "Python", ratingPercentage: 52 },
    { skill: "HTML", ratingPercentage: 45 },
    { skill: "CSS", ratingPercentage: 35 },
    { skill: "Mongo DB", ratingPercentage: 60 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A personal portfolio website to showcase all my details",
      subHeading: "Technologies Used: React JS,Bootstrap",
    },

    {
      title: "FPV Drone - Falcon",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A FPV Drone for survilance and Freestyling",
      subHeading: "Technologies Used: FPV freestyle Rider",
    },

    {
      title: "Hydroponics - Tommy",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "POC project - Hyfroponics automation",
      subHeading: "Technologies Used:Arduino",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Chennai Institute of Technology"}
        subHeading={"BACHELOR OF ENGINEERING -(MECHATRONICS)"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"HIGHER SECONDARY"}
        subHeading={"St.Sebastian's Matriculation School"}
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"SECONDARY SCHOOL"}
        subHeading={"St.Sebastian's Matriculation School"}
        fromDate={"2014"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"TATA CONSULANCY SERVICE"}
          subHeading={"SQL Developer INTERN"}
          fromDate={"2021"}
          toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a SQL and UNIX SCRIPT developer in TCS.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Completed all the assigned task before given deadlines.
          </span>
          <br />

          <span className="resume-description-text">
            - Completed all the given tasks.
          </span>
          <br />

          <span className="resume-description-text">
            - Learned about Database Management,and also Learned about Data
            Automation.
          </span>
          <br />
        </div>
      </div>
    </div>,
    <div className="resume-screen-contianer skills-container" key="skills">
      {skillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Tinkering"
        description="Love to do Tinkering works and Projects"
      />
      <ResumeHeading heading="Music" description="Listening to Music" />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while playing games"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  },[fadeInSubscription])

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
