import React, { Component } from "react";
import "./about.scss";
import ProfilePic from "../../assets/images/profile.png";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-div d-flex">
        <div className="flex-1">
          <img src={ProfilePic} className="profile-img" alt="" />
        </div>
        <div className="card-body flex-2">
          <p className="card-title name">Anuj Soni</p>
          <p className="card-subtitle mb-2 job-title">Software Engineer</p>
          <p className="card-text">
            "Always eager to learn new technologies and develop new things based
            on it. Thinking out of the box is what I believe in doing."
          </p>
          <p className="card-text">
            I believe learning is a process that never stops, even though you
            may become old enough there are things that you can still learn.A
            simple nature and simple choices, dream of the stars with feet on
            the ground. This is what I think and with the same in my heart, I am
            marching towards my goal.
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Follow me :</p>
          <div className="justify-content-around">
            <a
              href="https://github.com/anujsoni08"
              name="github-icon"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <img
                className="social-media-icon"
                src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-64.png"
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anujsoni08/"
              name="linkedin-icon"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <img
                className="social-media-icon"
                src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_in-64.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://twitter.com/anujsoni08"
              name="twitter-icon"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <img
                className="social-media-icon"
                src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Twitter-64.png"
                alt="twitter"
              />
            </a>
            <a
              href="mailto:anujsoni08@gmail.com"
              name="mail-icon"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <img
                className="social-media-icon"
                src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/gmail-64.png"
                alt="mail"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
