import React from "react";
import "./navigation.scss";

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-default">
        <h3>Anuj</h3>
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
              <a className="nav-link btn ml-1 mr-1" role="button" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn ml-1" role="button" href="/aboutme">
                About Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
