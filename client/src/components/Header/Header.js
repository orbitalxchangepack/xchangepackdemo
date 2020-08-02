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
                  src={process.env.PUBLIC_URL + "/home_logo.png"}
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
                  src={process.env.PUBLIC_URL + "/schoolreviews_logo.png"}
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
                  src={process.env.PUBLIC_URL + "/mappingplanner_logo.png"}
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
                  src={process.env.PUBLIC_URL + "/backpack_logo.png"}
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
                  src={process.env.PUBLIC_URL + "/askforum_logo.png"}
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
