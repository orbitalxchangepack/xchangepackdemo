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
                <div className="navbar">HOME</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/SchoolReviews">
                <div className="navbar">School Reviews</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/MappingPlanner">
                <div className="navbar">Mapping Planner</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/Backpack">
                <div className="navbar">Backpack</div>
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/Ask">
                <div className="navbar">Ask!</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
