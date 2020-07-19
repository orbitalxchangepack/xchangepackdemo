import React from "react";
import "./Footer.css";

const footer = (props) => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__text">
        <p>Orbital 2020 | Charmaine and Chandya</p>
      </div>
      <div className="footer__image">
        <img
          src={process.env.PUBLIC_URL + "/XCPplane.png"}
          alt="plane logo"
        ></img>
      </div>
    </div>
  </footer>
);

export default footer;
