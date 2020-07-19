import React, { Component } from "react";
import "./MappingPlanner.css";

class MappingPlanner extends Component {
  render() {
    return (
      <main className="Home">
        <div className="Home__content">
          <div className="Home__logo">
            <img src={process.env.PUBLIC_URL + "/XCPhomepage.png"}></img>
          </div>
          <div className="Home__text">
            <br />
            <p className="Home__question">Confused about SEP? </p>
            <p className="Home__ans">
              Use this site to help you figure out what modules to map and which
              schools to pick!
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default MappingPlanner;
