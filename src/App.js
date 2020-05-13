import React from "react";
import Main from "./components/MainComponent/main";
import Navigation from "./components/NavigationComponent/navigation";
import Footer from "./components/FooterComponent/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
