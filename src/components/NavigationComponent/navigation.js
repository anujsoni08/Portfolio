import React from "react";
import "./navigation.scss";

const Navigation = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md fixed-top navbar-light bg-default">
        <a
          class="navbar-brand btn btn-default navbar-btn"
          href="/"
          role="button"
        >
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link btn ml-1 mr-1" role="button" href="/projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn ml-1" role="button" href="/aboutme">
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
