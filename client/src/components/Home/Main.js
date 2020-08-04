import React from "react";
import "./Home.css";

const Main = (props) => (
  <main className="Home_main" style={{ background: "#769db1ff" }}>
    <div className="Main_content">
      <div className="Main_logo">
        <img
          src={process.env.PUBLIC_URL + "/XCPhomepage.png"}
          alt="X Change Pack Logo"
        ></img>
      </div>
      <div className="Main_text">
        <br />
        <p className="Main_question">Confused about SEP?</p>
        <p className="Main_ans">
          Use this site to help you figure out what modules to map and which
          schools to pick! Scroll down to find out more about our features! :)
        </p>
      </div>
    </div>
  </main>
);

export default Main;
