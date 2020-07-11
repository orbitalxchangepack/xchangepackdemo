import SchoolReviews from "./SchoolReviews";
import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UMich extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <SchoolReviews />
          </Grid.Column>
          <Grid.Column stretched width={13}>
            <Segment></Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default UMich;
