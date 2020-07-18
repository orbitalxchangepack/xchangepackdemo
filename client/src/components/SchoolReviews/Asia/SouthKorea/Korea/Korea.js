import SchoolReviews from "../../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../../SchoolContent.css";

class Korea extends Component {
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
              <h4 className="detail_location">South Korea, Seoul</h4>
              <h4 className="detail_semester">Semester 2</h4>
              <h1 className="title">Korea University</h1>
              <h4 className="author">
                author: Phyllis Loo | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Image src={require("./Korea_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={require("./Korea_pic2.jpg")} alt="pic2" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={require("./Korea_pic3.jpg")} alt="pic3" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      They have a school-wide orientation and a separate
                      Business School buddy system for exchange students. If you
                      actively take part in these activities, you can make a lot
                      of local friends and they will bring you out to drink/eat
                      at places near school quite often – drinking is quite a
                      common uni culture in Korea. But they also study very hard
                      in school & are very serious during classes. Didn’t do
                      heavy projects with the local students there, but most of
                      my project members were responsive and pulled their weight
                      – quality of work may not be as good as in SG students but
                      it’s probably because English isn’t their first language!
                    </p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={require("./Korea_pic4.jpg")} alt="pic4" />
                  </Grid.Column>
                  <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      Yes. Super strict with attendance. For some lessons, if
                      you miss more than 2 lessons, they give you F. For most,
                      they mark attendance every lesson and it will affect your
                      grade somehow.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Depends on the modules you take. I had full-MCQ papers as
                      well as open-ended papers. But in general, the difficulty
                      was much easier as compared to those I took in SG.
                      Business School modules may have projects as part of their
                      assessments as well but generally quite okay. If you’re
                      looking to pass, really nothing to fret over.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      BSP3701, FIN2704, BSP1703, CS1231 etc.
                    </h4>
                    <p className="content">
                      I mapped BSP3701 Strategic Management, FIN2704 Finance,
                      BSP1703 Managerial Economics, MNOX some management
                      elective (was a mistake, wanted to map MNO2705 but can’t)
                      and CS1231 Discrete Structures. There are a lot of options
                      from KU Business School since they open a lot of courses
                      to exchange students! My friends mapped FIN spec mods (I
                      think they almost finished their specialisations there)
                      and MKT spec mods as well. Also, their lessons are all in
                      English so no language problems in lessons. Some Profs
                      have really perfect English and some have a strong Korean
                      accent but they’re all very understandable.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      It’s 30-45 minutes away from the normal touristy areas in
                      Korea like Myeongdong, Hongdae all those. Around the
                      school itself, there are areas you can eat and explore
                      though. Wouldn’t say it’s especially convenient but it’s
                      acceptable.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      Public transport is super convenient, although some subway
                      stations can be a bit confusing (if you overshoot your
                      destination, you can’t just cross the platform to take the
                      train in the other direction like in SG). With time, you
                      get quite familiar with their subways so it’s okay. Can
                      eat on the train also so that’s great! (they sell
                      nice-smelling bread and this bite-sized corn bread thing
                      at subway stations and it’s good). But buses over subway
                      still. Can’t eat on the buses but you get closer to where
                      you want with buses! Just use Google or Kakao maps and you
                      should be fine (people always say Google Maps don’t work
                      well in Korea but my friends and I used it throughout). I
                      can’t really remember the cost but it’s quite similar to
                      SG transport cost. There’s no student fare for exchange
                      students, or maybe I just didn’t research hard enough…
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Quite expensive to eat out. A meal is 8000won on average,
                      can be way more expensive as well. But the food was
                      generally good so ok nvm exchange what just enjoy right.
                      We tried cooking but it doesn’t save much cost also but it
                      was fun at least. If you really want to save on the cost,
                      you can eat in school cafeterias or at convenience stores.
                      Convenience store food BEST. Paik’s Coffee is very worth
                      the money (big portion) and there are 1000won macarons and
                      1000won good twisted donuts at neighbourhood bakeries.
                      Shopping wise, it CAN be cheaper or more expensive
                      depending on where you shop at la. But ya it’s ok la I
                      think around average cost of living, it’s rly up to you to
                      choose to live cheap or live like a king.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Grid.Row>
                      <h2 className="subtitle_center">Accommodation</h2>
                      <p className="content_center">
                        Stayed in an Airbnb near school with my friends! It was
                        fun HAHAHAHA
                      </p>
                    </Grid.Row>
                    <Grid.Row>
                      <Image
                        centered
                        src={require("./Korea_pic5.jpg")}
                        alt="pic5"
                        width="40%"
                      />
                    </Grid.Row>
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

export default Korea;
