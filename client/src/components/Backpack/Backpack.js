import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Filter from "./Filter";
import "./Backpack.css";

class Backpack extends Component {
  render() {
    return (
      <div>
        <div className="backpack_container">
          <h2 className="subtitle_center" style={{ color: "white" }}>
            Select PU from Dropdown Lists
          </h2>
          <p className="content_center">
            Generates some common school information for easier comparison
          </p>
          <br />
          <p className="content_center">
            Head over to the School Reviews tab if stated below that a review
            for your chosen school is present!
          </p>
        </div>
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
