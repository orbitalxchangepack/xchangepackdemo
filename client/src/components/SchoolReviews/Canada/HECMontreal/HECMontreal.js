import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../SchoolContent.css";

class HECMontreal extends Component {
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
              <h4 className="detail_location">Montreal</h4>
              <h4 className="detail_semester">Semester 1, 2</h4>
              <h1 className="title">HEC Montreal</h1>
              <h4 className="author">
                author: Brian Tangerine (Sem 1), Eva Phoe, Charmayne Tay (Sem 2)
                | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}></Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      E: Canadians are friendly in general but we did not hang
                      out with the local students, mostly international students
                      from HK, taiwan etc.
                      <p className="content">
                        B: Not a party school, locals friendly but language
                        barrier as Montreal is French speaking, no campus so
                        more study focused.
                      </p>
                      <p className="content">
                        C: Montreal is in Canada but it’s is French speaking…
                        most people are welcoming but there will be 1 or 2
                        locals that look at you weird for not being able to
                        speak French there… the school is p cool! We have a
                        “club” in the school so once a week there’s a party in
                        school. Fun or very study focused? I would say 40-60
                        hahaha it’s almost as competitive as in Singapore imo.{" "}
                      </p>
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      B: Depending on the mod, mostly dont have but there was
                      one mod trading in fin mkt that require us to have
                      in-class assignment so had to attend.
                    </p>
                    <p className="content">
                      C: They do mark attendance in class for certain modules.
                      Some take attendance pretty seriously but some don’t.
                      Depending on your prof for that class.{" "}
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">B: Usual Mid-sem and finals paper</p>
                    <p className="content">
                      C: All physical exams with pen and paper!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      FIN3701,2,3, DAO2703 etc.
                    </h4>
                    <p className="content">
                      B/E: FIN3701,2,3, Futures and Options, DAO2703
                    </p>

                    <p className="content">
                      C: I mapped all fin mods there’s a variety of fin mods you
                      can pick from! I know someone who took marketing mods as
                      well. 4 friends took up basic French mod also which was a
                      bit useful since Montreal is French speaking…
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      E: It is a little off-town but it is in a decent
                      neighbourhood! Takes about 30 min by bus to town, although
                      the bus frequency is considerably low. From my Airbnb, it
                      takes around 45-60 minutes from home to airport, and
                      school is around 30-40 minutes from home.
                    </p>
                    <p className="content">
                      B: Pretty convenient, equivalent to around clementi in Sg
                      context, around 40 mins to airport.
                    </p>
                    <p className="content">
                      C: School is conveniently located near train stations. If
                      you’re going in winter tho the walk might seem Long as
                      there would be snow and that makes things a bit more
                      difficult as you’d have to trudge your way to school.
                      There are 2 campuses but it’s only a 10 mins walk away or
                      2 bus stops away which you can take! (Highly recommend you
                      take the bus esp in winter cause you’d be too cold to walk
                      the way there… unless you’re up for a challenge or sth)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      E: Public transport is cheap only if you get the monthly
                      pass!
                    </p>
                    <p className="content">
                      B: Public transport expensive but there’s student
                      concession for around $400 for 4 months iirc.
                    </p>
                    <p className="content">
                      C: Transport isn’t the cheapest but there’s a 4 month
                      student pass and you save a bit from the normal transport
                      costs. Once you have the transport pass, almost all
                      transport is covered unless you’re going out of Montreal –
                      then you have to pay another fare. It’s very convenient
                      cause the buses and trains are usually on time unless
                      there’s a snow storm.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      E: The Canadian dollar is quite similar to SGD so cost of
                      living is bout the same, so eating out can cost around
                      S$20-30 at cafes. Groceries are also similarly priced like
                      in Singapore, with Asian marts and Walmart around.
                    </p>
                    <p className="content">
                      C: Exchange rate is almost 1 to 1. Groceries are not that
                      expensive. I would recommend to share your food and
                      cooking tgt with your friends. It’s much cheaper than
                      eating out. Eating out is expensive as you have to pay for
                      service charge and tip them as well. One meal can easily
                      be more than $10 if you’re not careful.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">B: No school accommodation.</p>
                    <p className="content">
                      E: We rented an{" "}
                      <a href="https://www.airbnb.com.sg/rooms/14502513?guests=1&adults=1&source=handoff-ios&s=41&ref_device_id=9fd0809453af8688437b03f5ed98ebcc332d4acf&user_id=243034888&_branch_match_id=800384688040448162%3F&source_impression_id=p3_1592064812_FJEKOc5W1RJ3UG6nAirbnb!">
                        airbnb
                      </a>
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

export default HECMontreal;
