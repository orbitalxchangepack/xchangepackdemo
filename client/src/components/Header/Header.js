import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <img
            src={process.env.PUBLIC_URL + "/XCPlogo.png"}
            alt="X Change Pack Logo"
          ></img>
        </div>
        <div className="header__navitems">
          <ul>
            <li className="link__wrapper">
              <NavLink exact activeClassName="active" to="/">
                <img
                  className="navbar_logo"
                  src="https://i.imgur.com/s6Hd4BU.png"
                  alt="home logo"
                  float="left"
                ></img>
                <div className="navbar">HOME</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/SchoolReviews">
                <img
                  className="navbar_logo"
                  src="https://i.imgur.com/6XI8EZH.png"
                  alt="home logo"
                  float="left"
                ></img>
                <div className="navbar">School Reviews</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/MappingPlanner">
                <img
                  className="navbar_logo"
                  src="https://i.imgur.com/aWD4K4I.png"
                  alt="home logo"
                  float="left"
                ></img>
                <div className="navbar">Mapping Planner</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/Backpack">
                <img
                  className="navbar_logo"
                  src="https://i.imgur.com/Wo8ohhD.png"
                  alt="home logo"
                  float="left"
                ></img>
                <div className="navbar">Backpack</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/Ask">
                <img
                  className="navbar_logo"
                  src="https://i.imgur.com/A7x5vOA.png"
                  alt="home logo"
                  float="left"
                ></img>
                <div className="navbar">Ask!</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
