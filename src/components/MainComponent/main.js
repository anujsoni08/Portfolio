import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./main.scss";

const LandingPage = React.lazy(() =>
  import("../LandingPageComponent/landingPage")
);

const AboutMe = React.lazy(() => import("../AboutMeComponent/aboutMe"));

const Projects = React.lazy(() => import("../ProjectComponent/projects"));

const Main = () => (
  <main role="main">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        {/* <Route path="/projects" component={Projects} /> */}
      </Switch>
    </Suspense>
  </main>
);

export default Main;
