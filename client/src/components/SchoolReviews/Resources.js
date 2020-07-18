import SchoolReviews from "./SchoolReviews";
import React, { Component } from "react";
import { Card, Icon, Grid, Container, Image } from "semantic-ui-react";
import "./Resources.css";

class Resources extends Component {
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
              <h1 className="Heading">About</h1>
              <h1 className="Heading">Credits</h1>
              <Grid.Row>
                <div className="card">
                  <Card>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header>Daryl Hong</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        https://dhongtravels.com/
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        creator of blog containing SEP travels
                      </a>
                    </Card.Content>
                  </Card>
                </div>
              </Grid.Row>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Resources;
