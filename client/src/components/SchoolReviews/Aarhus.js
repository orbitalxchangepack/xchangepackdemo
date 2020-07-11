import SchoolReviews from "./SchoolReviews";
import React, { Component } from "react";
import { Grid, Segment, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Aarhus extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <SchoolReviews />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Segment>
              <Container>
                <h3>author: Daryl Hong</h3>

                <Image
                  src={require("./pic2.jpeg")}
                  alt="X Change Pack Logo"
                  width="20%"
                ></Image>
                <p>
                  Hi everyone! I’m back with another informative post about
                  exchange. This time, I have collated from my friends from my
                  batch about their experiences in their individual SEP schools
                  worldwide.
                </p>
                <p>
                  I really hope this guide/sharing can help you make a better
                  and more well-informed decision on which school you might want
                  to include in your future SEP choices! I’ve decided to only
                  focus on schools offered by NUS Business School, but I might
                  include others if this expands quickly! I really want to give
                  a big thanks to my friends who have spent their time to write
                  about their school (Some of them really put in a lot of
                  effort), so don’t forget to thank them as well in the comments
                  okay. I will pass on the thanks 😛
                </p>
                <p>
                  I only did the collation and some edits here and there. Some
                  of us are also willing to share more information so just let
                  us know if you have more questions! (PS: To make it more
                  organised and easier to search, I have split up the write-ups
                  into different regions in Europe, as well as continents (i.e
                  USA/Canada and Asia/Oceania are found in another post.
                </p>
                <p>
                  Do check that out as well!). Stay tuned for the next few
                  parts! Rushed this out before the closing of the applications
                  on the 16th of June, so please bear with me any formatting
                  issues and errors. Will correct them as soon as I finish my
                  special term module next week. Also, I will constantly update
                  it with more schools and pictures, so stay tuned and bookmark
                  it as well!
                </p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Aarhus;
