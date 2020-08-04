import React from "react";
import "./Home.css";
import { Grid, Container } from "semantic-ui-react";

const Review = (props) => (
  <main className="Home_main">
    <Container fluid>
      <Grid celled columns={2}>
        <Grid.Row>
          <Grid.Column width={6} style={{ background: "#6b7a8fff" }}>
            <div className="Home_logo">
              <img
                src={require("./Home_SchoolReviews.png")}
                alt="School Reviews Homepage Logo"
                width="95%"
              ></img>
            </div>
          </Grid.Column>
          <Grid.Column width={10}>
            <p className="Home_body" style={{ color: "#6b7a8fff" }}>
              School review page offers information and senior reviews on each
              school available. You can make use of the side navigation bar to
              navigate through the different schools in the various continents
              and countries. Each school review page will try to cover similar
              areas of the author's experience, for example Location, School
              Culture, Modules to Map, Accomodations and so on!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </main>
);

export default Review;
