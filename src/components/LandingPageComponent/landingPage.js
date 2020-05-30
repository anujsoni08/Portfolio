import React, { Component } from "react";

import ReactImage from "../../assets/images/react.png";
import ReduxImage from "../../assets/images/redux.png";
// import GithubImage from "../../assets/images/github.png";
import JavascriptImage from "../../assets/images/javascript.png";
import TypescriptImage from "../../assets/images/typescript.png";
import AngularImage from "../../assets/images/angular.png";
import BootstrapImage from "../../assets/images/bootstrap.png";
import CSS3Image from "../../assets/images/css3.png";
import HTML5Image from "../../assets/images/html5.png";

import "./landingPage.scss";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="justify-content-center align-items-center">
          <h1 className="greet-text text-center">
            Hi, I am{" "}
            <span style={{ color: "rgb(26, 115, 232)" }}> Anuj Soni</span>
          </h1>
          {/* <div className="profile-text text-center">
            <p>Frontend Developer</p>
          </div> */}
        </div>
        <div className="container-fluid mb-3 mt-5">
          <h1 className="mt-2 mb-1 text-center">Currently, I'm Working on</h1>
          <div className="flex text-md-center mt-2">
            <img
              src={TypescriptImage}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="typescript"
            />
            <img
              src={JavascriptImage}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="javascript"
            />
            <img
              src={AngularImage}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="angular"
            />
            <img
              src={ReactImage}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="react"
            />
            <img
              src={ReduxImage}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="redux"
            />
            <img
              src={HTML5Image}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="html5"
            />
            <img
              src={CSS3Image}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="css3"
            />
            <img
              src={BootstrapImage}
              className="m-2"
              style={{ maxWidth: "8vh" }}
              alt="bootstrap"
            />
          </div>
        </div>
        <div className="container-fluid d-flex flex-column align-items-center mt-5 mb-5">
          <h1>Work Experience</h1>
          <div>
            <div class="media d-flex">
              <img
                class="p-2 flex-shrink-1"
                src="https://media.licdn.com/dms/image/C510BAQEX1M7aOFtEkw/company-logo_200_200/0?e=2159024400&v=beta&t=9v4BEptjhFkU8xX3fePV_7HSu1xPHc_2ofiT-f2Ms6c"
                height="100px"
                width="100px"
                alt="edfora"
              />
              <div class="media-body p-2 w-100">
                <h5 class="mt-0">Software Developer</h5>
                Edfora Infotech Pvt. Ltd. (myPAT){" "}
                <span> (May 2019 - Present)</span>
              </div>
            </div>
            <div class="media d-flex">
              <img
                class="p-2 flex-shrink-1"
                src="https://media.glassdoor.com/sql/1933586/mountblue-technologies-squarelogo-1559564348584.png"
                height="100px"
                width="100px"
                alt="mountblue"
              />
              <div class="media-body p-2 w-100">
                <h5 class="mt-0">Software Developer Trainee</h5>
                Mountblue Tech. Pvt. Ltd. <span> (Feb 2019 - May 2019)</span>
              </div>
            </div>
            <div class="media d-flex">
              <img
                class="p-2 flex-shrink-1"
                src="https://pbs.twimg.com/profile_images/497488376669274112/W-ugVrRD.jpeg"
                height="100px"
                width="100px"
                alt="venturepact"
              />
              <div class="media-body p-2 w-100">
                <h5 class="mt-0">Technical Development Assistant</h5>
                Venturepact Pvt. Ltd. <span> (Jun 2018 - Jul 2018)</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
