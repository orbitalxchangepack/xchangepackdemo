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
                Home
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink exact activeClassName="active" to="/SchoolReviews">
                School Reviews
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/MappingPlanner">
                Mapping Planner
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/Backpack">
                Backpack
              </NavLink>
            </li>
            <li className="link__wrapper">
              <NavLink activeClassName="active" to="/Ask">
                Ask!
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
