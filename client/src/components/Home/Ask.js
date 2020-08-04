import React from "react";
import "./Home.css";
import { Grid, Container } from "semantic-ui-react";

const Ask = (props) => (
  <main className="Home_main">
    <Container fluid>
      <Grid celled columns={3}>
        <Grid.Row>
          <Grid.Column width={6}>
            <p className="Home_body">
              The Ask! Forum is where you can raise any other queries you have,
              and create posts or scroll through posts in different categories
              and threads!
            </p>
          </Grid.Column>
          <Grid.Column width={4} style={{ background: "#f7c331ff" }}>
            <div className="Home_logo">
              <img
                src={require("./Home_Ask.png")}
                alt="Ask Forum Homepage Logo"
                width="100%"
              ></img>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <p className="Home_body">
              To use this feature, you simply have to create an account with
              your email and password :)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </main>
);

export default Ask;
