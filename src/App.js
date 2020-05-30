import React from "react";
import Main from "./components/MainComponent/main";
import Navigation from "./components/NavigationComponent/navigation";
import "./App.css";

function App() {

  document.title = 'Anuj Soni'

  return (
    <div className="app">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
