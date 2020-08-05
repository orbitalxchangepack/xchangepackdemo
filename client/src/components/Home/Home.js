import React from "react";
import "./Home.css";
import Main from "./Main";
import SchoolReview from "./SchoolReview";
import MappingPlanner from "./MappingPlanner";
import Backpack from "./Backpack";
import Ask from "./Ask";

const home = (props) => (
  <div>
    <Main />
    <SchoolReview />
    <MappingPlanner />
    <Backpack />
    <Ask />
  </div>
);

export default home;

//    <h2 className="divider">IV</h2>
