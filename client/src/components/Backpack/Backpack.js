import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Filter from "./Filter";
import "./Backpack.css";

class Backpack extends Component {
  render() {
    return (
      <div className="container">
        <Grid
          celled
          divided
          style={{ overflow: "auto", minHeight: "700px" }}
          columns={3}
        >
          <Grid.Column>
            <Filter />
          </Grid.Column>
          <Grid.Column>
            <Filter />
          </Grid.Column>
          <Grid.Column>
            <Filter />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Backpack;
