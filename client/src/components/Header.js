import React from "react";
import "./Header.css";
import liskLogo from "../assets/liskLogo-small.png";

const Header = () => {
  return (
    <div>
      <h1 className="Header">
        <img src={liskLogo} alt="Lisk logo" />
        &nbsp;Global Data Chain
      </h1>
    </div>
  );
};
export default Header;
