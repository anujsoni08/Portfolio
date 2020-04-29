import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../LandingPageComponent/landingPage";
import AboutMe from "../AboutMeComponent/aboutMe";
import Projects from "../ProjectComponent/projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
