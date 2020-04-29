import React from "react";
import Main from "./components/MainComponent/main";
import Navigation from "./components/NavigationComponent/navigation";
import "./App.css";

function App() {
  return (
    <div className="app d-flex flex-column">
      <Navigation className="header-div mb-auto" />
      <Main className="main-div" />
    </div>
  );
}

export default App;
