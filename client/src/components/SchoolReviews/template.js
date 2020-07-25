/*Template used for layout of School Reviews pages*/

import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container, Image, Table, Label } from "semantic-ui-react";
import "../../SchoolContent.css";

class Lund extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <SchoolReviews />
          </Grid.Column>
          <Grid.Column
            style={{ overflow: "auto", maxHeight: "1000px" }}
            stretched
            width={13}
          >
            <Container>
              <h4 className="detail_location"></h4>
              <h4 className="detail_semester"></h4>
              <h1 className="title"></h1>
              <h4 className="author"> </h4>
              <h1 className="spacer"></h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}>
                  <Grid.Column width={3}></Grid.Column>
                  <Grid.Column width={5}></Grid.Column>
                  <Grid.Column width={5}></Grid.Column>
                  <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content"></p>
                    <p className="content"></p>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content"></p>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      FIN 3701, two FIN Electives, BSP 3701 Strategic Management
                      etc.
                    </h4>
                    <p className="content"></p>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content"></p>
                  </Grid.Column>
                  <Grid.Column width={5}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column rows={2} width={10}>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Lund;
