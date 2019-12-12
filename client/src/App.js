import React, { useState } from "react";
import "./App.css";
import WorldMap from "./components/WorldMap";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import About from "./components/About";

const App = () => {
  const [operator, setOperator] = useState("korben3");
  const [account, setAccount] = useState("5320901975065898377L");

  const markerClicked = data => {
    setOperator(data[0]);
    setAccount(data[1]);
  };

  return (
    <div>
      <Header />
      <WorldMap markerClicked={markerClicked} />
      <Statistics operator={operator} account={account} />
      <About />
    </div>
  );
};

export default App;
