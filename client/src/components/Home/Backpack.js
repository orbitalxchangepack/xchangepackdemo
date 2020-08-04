import React from "react";
import "./Home.css";
import { Grid, Container } from "semantic-ui-react";

const Backpack = (props) => (
  <main className="Home_main">
    <Container fluid>
      <Grid celled columns={2}>
        <Grid.Row>
          <Grid.Column width={6} style={{ background: "#6aacbeff" }}>
            <div className="Home_logo">
              <img
                src={require("./Home_Backpack.png")}
                alt="Backpack Homepage Logo"
                width="100%"
              ></img>
            </div>
          </Grid.Column>
          <Grid.Column width={10}>
            <p className="Home_body" style={{ color: "#6aacbeff" }}>
              Next we have the backpack function where you can drop schools you
              have currently shortlisted to compare their features side-by-side.
              You can search up to three schools, which will then generate
              similar sections of information for an easier side by side
              comparison as you decide on your final rankings!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </main>
);

export default Backpack;
