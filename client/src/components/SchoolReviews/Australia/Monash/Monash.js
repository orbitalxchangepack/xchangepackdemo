import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../SchoolContent.css";

class Monash extends Component {
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
              <h4 className="detail_location">Melbourne</h4>
              <h4 className="detail_semester">-</h4>
              <h1 className="title">Monash University</h1>
              <h4 className="author">
                author: Namasvi | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row></Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      I made friends with exchangers rather than the locals.
                      Most of the people partied a lot but they were welcoming
                      to everyone who were up for a good time haha
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      They also have sectionals and tutorials + lectures kinda
                      class so lectures you can skip, but sectionals and
                      tutorials they take attendance
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Exams are mostly MCQ, similar to NUS.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      Strategic Management, FIN, MKT, etc.
                    </h4>
                    <p className="content_center">
                      I mapped Strategic management, 2 fin and 1 mkt mod.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      The school is not very convenient as it is in the suburbs,
                      city is a 40 min train ride away. Airport is very
                      inaccessible you need a ride/$70 Uber or shuttle buses
                      which do not operate at all times.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      Public transport is cheap as there’s student fare. Trams
                      and buses are cheap, but Ubers are really expensive.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      For living expenses including travel i used to spend
                      500-1000 a month
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">
                      Accommodation/Sch is almost the same cost as NUS
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

export default Monash;
