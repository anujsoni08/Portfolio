import React from "react";
import { Switch, Route } from "react-router-dom";
import "./main.scss";

import LandingPage from "../LandingPageComponent/landingPage";
import AboutMe from "../AboutMeComponent/aboutMe";
import Projects from "../ProjectComponent/projects";

const Main = () => (
  <main role="main">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
      </Switch>
  </main>
);

export default Main;
