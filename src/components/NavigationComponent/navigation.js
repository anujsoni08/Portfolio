import React from "react";
import "./navigation.scss";

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-default">
        <a
          className="nav-link btn ml-1"
          style={{ fontSize: "larger" }}
          role="button"
          href="/"
        >
          <span className="h3">Anuj Soni</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link btn ml-1 mr-1"
                style={{ fontSize: "larger" }}
                role="button"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn ml-1"
                style={{ fontSize: "larger" }}
                role="button"
                href="/projects"
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn ml-1"
                style={{ fontSize: "larger" }}
                role="button"
                href="https://drive.google.com/file/d/1CTw1g1V38nqcJJoO4PSe9HkySgd5COrE/view?usp=sharing"
              >
                RESUME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn ml-1"
                style={{ fontSize: "larger" }}
                role="button"
                href="/about"
              >
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
