import React from "react";
import banner from "../assets/images/banner.jpg";

const headercomp = () => {
  return (
    <header>
      <div className="left">
        <img src="banner" alt="bannière" />
        <div className="user-infos">
          <h1>Matthieu Anquibou</h1>
          <h2>Développeur web - mobile</h2>
        </div>
      </div>

      <div className="right"></div>
    </header>
  );
};

export default headercomp;
