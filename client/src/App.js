import React from "react";
import "./App.css";
import WorldMap from "./components/WorldMap";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <WorldMap />
      <Statistics />
      <About />
    </div>
  );
};

export default App;
