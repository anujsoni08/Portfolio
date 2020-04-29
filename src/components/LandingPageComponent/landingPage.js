import React, { Component } from "react";
import "./landingPage.scss";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-div">
        <div className="justify-content-center align-items-center">
          <h1 className="greet-text">
            Hi, I am <span style={{ color: "rgb(26, 115, 232)" }}> Anuj</span>
          </h1>
          <div className="profile-text">
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="jumbotron mb-0">
          <h1 className="mt-2 mb-1">Currently, I'm Working on</h1>
          <p className="mt-2 mb-2" style={{ fontSize: "1.5rem" }}>
            Thinking out of the box is what I believe in doing. I believe
            learning is a process that never stops, even though you may become
            old enough there are things that you can still learn.
          </p>
          <div className="flex text-md-center mt-2">
            <img
              src="https://image.flaticon.com/icons/svg/919/919832.svg"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="typescript"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="javascript"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="angular"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="react"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="nodejs"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="mongodb"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="python"
            />
            <img
              src="https://image.flaticon.com/icons/svg/888/888859.svg"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="html5"
            />
            <img
              src="https://image.flaticon.com/icons/svg/888/888847.svg"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="css3"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png"
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="sass"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
