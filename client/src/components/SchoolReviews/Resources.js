import SchoolReviews from "./SchoolReviews";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import InstagramEmbed from "react-instagram-embed";
import "./Resources.css";

class Resources extends Component {
  render() {
    return (
      <div style={{ background: "#838ea4" }}>
        <Grid>
          <Grid.Column
            width={3}
            style={{ overflow: "auto", minHeight: "700px" }}
          >
            <SchoolReviews />
          </Grid.Column>
          <Grid.Column style={{ overflow: "auto" }} stretched width={13}>
            <Grid divided columns={3}>
              <Grid.Column width={10} style={{ background: "#838ea4" }}>
                <div className="about_container">
                  <h1 className="about_title">About</h1>
                  <p className="content_about">
                    Navigate through the side bar to read up on students'
                    reviews on their SEP exchanges to different schools!
                  </p>
                  <p className="content_about">
                    Each review page will consist of different sections as you
                    scroll down, explaining different aspects of school life,
                    from acads, opportunities to travel, and to cost of living
                    etc.
                  </p>
                  <p className="content_about">
                    At the moment, the schools are mainly SEP Partner
                    Universities from the NUS Business Faculty students.
                    However, we do see potential extension of creating a filter
                    to navigate through the Partner Universities of different
                    faculties!
                  </p>
                  <p className="content_about">
                    Disclaimer: All the work showcased are from the efforts of
                    the authors in writing of the content. Special thanks to
                    Daryl Hong, for allowing us to make use of his compiled
                    resources to showcase the functionality of our webpage.
                  </p>
                  <p className="content_about">
                    Do headover to his website on the right if you want to read
                    up on other SEP school locations! Or you can click on this
                    link{" "}
                    <a
                      style={{ color: "#c3edfb" }}
                      href="https://dhongtravels.com/"
                    >
                      https://dhongtravels.com/
                    </a>
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column width={5} style={{ background: "white" }}>
                <div className="credits">
                  <h1 className="credits_title">Credits</h1>
                  <Container>
                    <h2 className="credits_Heading">Daryl Hong</h2>
                    <p className="credits_subHeading">
                      creator of blog containing SEP travels
                    </p>
                    <div className="details">
                      <a
                        style={{ color: "#6fa4d7" }}
                        href="https://dhongtravels.com/"
                      >
                        https://dhongtravels.com/
                      </a>
                    </div>
                    <div className="insta">
                      <InstagramEmbed
                        url="https://www.instagram.com/p/B0ZyHxSF_Kw/"
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName="div"
                        protocol=""
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                      />
                    </div>
                  </Container>
                </div>
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Resources;
