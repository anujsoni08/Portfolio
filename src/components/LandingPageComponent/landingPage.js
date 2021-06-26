import React from "react";

import ReactImage from "../../assets/images/react.png";
import ReduxImage from "../../assets/images/redux.png";
import JavascriptImage from "../../assets/images/javascript.png";
import TypescriptImage from "../../assets/images/typescript.png";
import AngularImage from "../../assets/images/angular.png";
import BootstrapImage from "../../assets/images/bootstrap.png";
import CSS3Image from "../../assets/images/css3.png";
import HTML5Image from "../../assets/images/html5.png";
import MypatImage from "../../assets/images/mypat.png";
import VenturepactImage from "../../assets/images/venturepact.png";

import "./landingPage.scss";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="justify-content-center align-items-center">
        <h1 className="greet-text text-center">
          Hi, I am{" "}
          <span style={{ color: "rgb(26, 115, 232)" }}> Anuj Soni</span>
        </h1>
      </div>
      <div className="container-fluid mb-3 mt-5">
        <h1 className="mt-2 mb-1 text-center">Currently, I'm Working on</h1>
        <div className="flex text-md-center mt-2">
          <img
            src={TypescriptImage}
            className="m-2"
            height="48px"
            width="48px"
            alt="typescript"
            data-toggle="popover"
            title="Typescript"
          />
          <img
            src={JavascriptImage}
            className="m-2"
            height="48px"
            width="48px"
            alt="javascript"
            data-toggle="popover"
            title="Javascript"
          />
          <img
            src={AngularImage}
            className="m-2"
            height="48px"
            width="48px"
            alt="angular"
            data-toggle="popover"
            title="Angular"
          />
          <img
            src={ReactImage}
            className="m-2"
            height="48px"
            width="48px"
            alt="react"
            data-toggle="popover"
            title="React"
          />
          <img
            src={ReduxImage}
            className="m-2"
            height="48px"
            width="48px"
            alt="redux"
            data-toggle="popover"
            title="Redux"
          />
          <img
            src={HTML5Image}
            className="m-2"
            height="48px"
            width="48px"
            alt="html5"
            data-toggle="popover"
            title="HTML5"
          />
          <img
            src={CSS3Image}
            className="m-2"
            height="48px"
            width="48px"
            alt="css3"
            data-toggle="popover"
            title="CSS3"
          />
          <img
            src={BootstrapImage}
            className="m-2"
            height="48px"
            width="48px"
            alt="bootstrap"
            data-toggle="popover"
            title="Bootstrap"
          />
        </div>
      </div>
      <div className="container-fluid d-flex flex-column align-items-center mt-5 mb-5">
        <h1>Work Experience</h1>
        <div>
          <div className="media d-flex">
            <img
              className="p-2 flex-shrink-1"
              src={MypatImage}
              height="100px"
              width="100px"
              alt="edfora"
            />
            <div className="media-body p-2 w-100">
              <h5 className="mt-0">Software Developer</h5>
              Edfora Infotech Pvt. Ltd. (myPAT){" "}
              <span> (May 2019 - June 2020)</span>
            </div>
          </div>
          <div className="media d-flex">
            <img
              className="p-2 flex-shrink-1"
              src="https://media.glassdoor.com/sql/1933586/mountblue-technologies-squarelogo-1559564348584.png"
              height="100px"
              width="100px"
              alt="mountblue"
            />
            <div className="media-body p-2 w-100">
              <h5 className="mt-0">Software Developer Trainee</h5>
              Mountblue Tech. Pvt. Ltd. <span> (Feb 2019 - May 2019)</span>
            </div>
          </div>
          <div className="media d-flex">
            <img
              className="p-2 flex-shrink-1"
              src={VenturepactImage}
              height="100px"
              width="100px"
              alt="venturepact"
            />
            <div className="media-body p-2 w-100">
              <h5 className="mt-0">Technical Development Assistant</h5>
              Venturepact Pvt. Ltd. <span> (Jun 2018 - Jul 2018)</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
