import React from "react";
import "./Home.css";
import { Grid, Container } from "semantic-ui-react";

const MappingPlanner = (props) => (
  <main className="Home_main">
    <Container fluid>
      <Grid celled columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
            <p className="Home_body" style={{ color: "#b6a19eff" }}>
              Instead of having to command+f to find specific modules in module
              rec, or having to manually type the school code/module code, you
              can now begin by simply checking the boxes you wish to filter by!
              (e.g. NUS module code, or continent you wish to focus on). The
              system will then generate a list of filtered data that match your
              checked criteria! We hope that this will provide more filter
              options, and a more streamlined/efficient user experience in
              searching for suitable schools!
            </p>
          </Grid.Column>
          <Grid.Column width={6} style={{ background: "#b6a19eff" }}>
            <div className="Home_logo">
              <img
                src={require("./Home_MappingPlanner.png")}
                alt="Mapping Planner Homepage Logo"
                width="100%"
              ></img>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </main>
);

export default MappingPlanner;
