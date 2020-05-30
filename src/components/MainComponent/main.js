import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./main.scss";

const LandingPage = React.lazy(() =>
  import("../LandingPageComponent/landingPage")
);

const About = React.lazy(() => import("../AboutComponent/about"));

const Projects = React.lazy(() => import("../ProjectComponent/projects"));

const Main = () => (
  <main role="main">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Suspense>
  </main>
);

export default Main;
