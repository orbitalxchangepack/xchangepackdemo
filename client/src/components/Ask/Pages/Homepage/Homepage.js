import React from "react";
import "./Homepage.css";

const Homepage = (props) => (
  <main className="Homepage">
    <div className="Homepage__content">
      <div className="Homepage__logo">
        <img
          src={process.env.PUBLIC_URL + "/Ask!ForumLogo.png"}
          alt="Ask Forum Logo"
        ></img>
      </div>
      <div className="Homepage__text"></div>
    </div>
  </main>
);

export default Homepage;
