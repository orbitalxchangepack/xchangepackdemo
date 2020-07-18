import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class UMich extends Component {
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
              <h4 className="detail_location">Michigan, Ann Arbor</h4>
              <h4 className="detail_semester">AY19/20 Semester 2</h4>
              <h1 className="title">University of Michigan, Ann Arbor</h1>
              <h4 className="author">author: Charmaine Ho</h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column width={4}>
                    <Image src={require("./UMich_pic1.jpeg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src={require("./UMich_pic3.jpeg")} alt="pic3" />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={require("./UMich_pic2.jpeg")} alt="pic2" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image src={require("./UMich_pic4.jpeg")} alt="pic4" />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_left">School Culture</h2>
                    <p className="content">
                      I had my SEP at the University of Michigan, Ross Business
                      School. I would say their Business School focuses alot on
                      open discussion in the classroom, and emphasises on having
                      two way discussions between the professors and students.
                      Fortunately, though, some of the classes do not have your
                      usual class participation %, so that might be good news
                      for some of you. Academics wise, some classes had a little
                      more of a learning curve, e.g. FIN351 Private Equity, and
                      some might be a little more fast paced, e.g. FIN480
                      Options and Futures. But otherwise, I feel that the
                      workload is manageable, and the professors are really
                      approachable if you have any questions!
                    </p>
                    <p className="content"></p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <video
                      src={require("./UMich_vid1.mp4")}
                      width="100%"
                      alt="vid1"
                      autoplay="true"
                      Loop="true"
                      muted="true"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      Some of my classes did take attendence, while others were
                      pretty lax, so it really depends. But regardless, I think
                      you would definitely be able to pass, even if you didn't
                      attend many of the classes, and I know of some peers who
                      skipped the lessons and just read the materials online and
                      submitted assignments on time (and did well haha).
                      Personally, as I was completing a good number of Finance
                      courses there, I wanted a balance between studying and
                      having fun/travelling, so I did attend most of the
                      classes, but arranged my timetable to free up my Fridays,
                      so I could travel around during the longer weekend!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={11}>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      So uh...I went in AY19/20 Semester 2...which
                      coincidentally coincided with the COVID pandemic. Which
                      kind of sucked. I took my mid-terms in Michigan, and the
                      exams are held in the classrooms (like the seminar rooms
                      in NUS MRB). I think the setting was pretty informal. Some
                      of my modules had easier examinations e.g. FIN480, which
                      was all MCQs. FIN408/FIN409 and FIN317 had slightly more
                      difficult examinations which focused on applying the
                      concepts and doing some calculations. And some modules
                      have presentations and online submissions instead, with no
                      actual midterms/finals!
                    </p>
                    <p className="content">
                      Most of the modules do have a decent weighatage on
                      assignments, so do make sure to get them done! But that
                      also means you can complete them while travelling! :)
                    </p>
                    <p className="content">
                      P.S. Fortunately, the winter semester for UMich starts and
                      ends relatively earlier to some other schools (which is
                      something to consider as well if you are looking to do
                      summer internship!)
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./UMich_pic5.jpeg")} alt="pic5" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      FIN3702, FIN3703, FINetc.
                    </h4>
                    <p className="content"></p>
                    <p className="content"></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column width={4}></Grid.Column>
                  <Grid.Column width={7}>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      The university is located in Ann Arbor, Michigan, which is
                      considered to be a small University Town. As the town
                      population consists of a majority of the University
                      students, it was pretty deserted when we first arrived
                      before the semester started
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    {" "}
                    <Image src={require("./UMich_pic6.jpeg")} alt="pic6" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}></Grid.Column>
                  <Grid.Column width={12}>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p></p>
                    <p></p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accomodation Choices</h2>
                    <p></p>
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

export default UMich;
