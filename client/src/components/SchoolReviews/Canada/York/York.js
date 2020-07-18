import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class York extends Component {
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
              <h4 className="detail_location">Toronto</h4>
              <h4 className="detail_semester">Semester 2</h4>
              <h1 className="title">York University</h1>
              <h4 className="author">
                author: Benjamin Yeo | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}>
                  <Grid.Column width={4}></Grid.Column>
                  <Grid.Column width={8}>
                    <Image src={require("./York_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      Locals are friendly but it all depends on how much you
                      immerse yourself in the school. Personally, I stayed with
                      my fellow NUS business exchangers in an Airbnb off campus
                      and we had the time of our lives together but we traded
                      that off with getting to know the locals. Not a big party
                      or sports school if you’re looking for either of those.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      Most of my Fin mods were 10% class part. But it all
                      depends on each individual professor. For example, my
                      investments professor actually encouraged us to travel so
                      that was really nice.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      All my Fin mods had finals, the weightage ranges from
                      30-60%
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      FIN, Strategic Management etc.
                    </h4>
                    <p className="content">
                      4x fin mods: 3701,3702, and 2 4k mods, 1x strategic
                      management
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      School is 30mins train ride from the city and the train
                      entrance is right beside the business school. However,
                      that being said, public transport in Toronto is expensive,
                      different operators of train and bus means u may have to
                      pay $3.5 x 2 for a 1 way trip. Never tried from from
                      airport to school but I believe it’s not very convenient,
                      would recommend taking a cab: max 30mins to airport.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      Public transport is expensive but u can ‘cheat’ the bus
                      fares (just don’t get caught), student concession is still
                      very expensive, 100+ if I’m not wrong. We pooled Uber and
                      Lyft so it was cheaper than taking public transport to
                      school.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Typical meal on campus is a minimum of $7 for a full meal.
                      To save money, we often meal-prepped our lunches and
                      cooked at home. Groceries are affordable (chicken is more
                      expensive then Sg but beef is cheaper) and good thing
                      about Toronto is that u have Asian supermarkets (Check out
                      ur nearest one when planning ur accoms to have ur comfort
                      Asian food!). Also, good thing is that SGD TO CAD is
                      normally around 1:1 so it’s much cheaper than USA. Food
                      wise, even though it’s a tad pricey than SG, the variety
                      of food will ensure you never feel homesick!! Not to
                      mention how diverse the ppl in Toronto are!!!
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

export default York;
