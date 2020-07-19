import SchoolReviews from "../../SchoolReviews";
import Emoji from "../../Emoji";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../SchoolContent.css";

class UTAustin extends Component {
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
              <h4 className="detail_location">Texas</h4>
              <h4 className="detail_semester">Semester 1</h4>
              <h1 className="title">UT Austin (Texas)</h1>
              <h4 className="author">
                author: Natasha Lau | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row></Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      VERY FRIENDLY locals who love exchange students, good amt
                      of partying and raves.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">You can miss up to 6 classes.</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Different kinds of exams hahaha but the ones i did were
                      mostly MCQ.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">MKT etc.</h4>
                    <p className="content_center">
                      I took MKT mods, unsure about the rest.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content_center">Not too far from downtown</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      Free public transport for students!!! However, as the city
                      is pretty big, u would need a car to rly travel around a
                      lot… my tip is to make local friends with cars >:)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Groceries are affordable, so I usually cook and eat at
                      home! Eating out is expensive{" "}
                      <Emoji symbol="🙁" label="sad face" />
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">
                      I stayed in a house on campus, as it was the best way to
                      make friends!
                    </p>
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

export default UTAustin;
