import React, { Component } from "react";
import "./aboutMe.scss";
import ProfilePic from "../../assets/images/profile.png";

class AboutMe extends Component {
  render() {
    return (
      <div class="jumbotron about-div d-flex">
        <div className="flex-1">
          <img src={ProfilePic} class="profile-img" alt="" />
        </div>
        <div class="card-body flex-2">
          <p class="card-title name">Anuj Soni</p>
          <p class="card-subtitle mb-2 job-title">Software Engineer</p>
          <p class="card-text">
            "Always eager to learn new technologies and develop new things based
            on it. Thinking out of the box is what I believe in doing."
          </p>
          <p class="card-text">
            I believe learning is a process that never stops, even though you
            may become old enough there are things that you can still learn.A
            simple nature and simple choices, dream of the stars with feet on
            the ground. This is what I think and with the same in my heart, I am
            marching towards my goal.
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Follow me :</p>
          <div className="d-flex  justify-content-around">
            <a
              href="https://github.com/anujsoni08"
              name="github-icon"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <img
                class="social-media-icon"
                src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anujsoni08/"
              name="linkedin-icon"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <img
                class="social-media-icon"
                src="https://image.flaticon.com/icons/svg/174/174857.svg"
                alt="linkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/asoni08/"
              name="instagram-icon"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <img
                class="social-media-icon"
                src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
                alt="instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/anujsoni333"
              name="facebook-icon"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link "
            >
              <img
                class="social-media-icon"
                src="https://image.flaticon.com/icons/svg/174/174848.svg"
                alt="facebook"
              />
            </a>
            <a
              href="https://twitter.com/anujsoni08"
              name="twitter-icon"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <img
                class="social-media-icon"
                src="https://image.flaticon.com/icons/svg/174/174876.svg"
                alt="twitter"
              />
            </a>
            <a
              href="mailto:anujsoni08@gmail.com"
              name="mail-icon"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <img
                class="social-media-icon"
                src="https://image.flaticon.com/icons/svg/732/732200.svg"
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
