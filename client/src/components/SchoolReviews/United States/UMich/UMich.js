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
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content_center">
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
                    <br />
                    <p className="content_center">
                      Ann Arbor is a relatively small town (I would think), but
                      it was a really new experience for me so I really enjoyed
                      exploring the area and finding small cafes/shops. If you
                      are looking for a more exciting school life, you could opt
                      to try and take part in the fraternities/sororities. There
                      are bars/clubs where the students hang out but they do
                      check your ID.
                    </p>
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
                      coincidentally coincided with the COVID pandemic. I took
                      my mid-terms in Michigan, and the exams are held in the
                      classrooms (like the seminar rooms in NUS MRB). I think
                      the setting was pretty informal. Some of my modules had
                      easier examinations e.g. FIN480, which was all MCQs.
                      FIN408/FIN409 and FIN317 had slightly more difficult
                      examinations which focused on applying the concepts and
                      doing some calculations. And some modules have
                      presentations and online submissions instead, with no
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
                      FIN3701, FIN3703, FIN4761A, FIN4122, FIN3116 etc.
                    </h4>
                    <p className="content">
                      So I opted to clear majority of my Finance modules there,
                      and UMich is a good school especially if you're looking to
                      clear FIN4k modules! The modules offered do differ between
                      the winter and spring semesters though, so you have to
                      keep a lookout on their site! (p.s. mod reg is done
                      through bidding, and approvals etc. for UMich modules with
                      pre-reqs must be sought from the profs...its a lengthy
                      process)
                    </p>
                    <p className="content">
                      There are also definitely other modules for other
                      specializations (though I'm not sure specifically) like
                      marketing, business analytics etc.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column width={5}>
                    <Image src={require("./UMich_pic7.jpeg")} alt="pic7" />
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      The university is located in Ann Arbor, Michigan, which is
                      considered to be a small University Town. As the town
                      population consists of a majority of the University
                      students, it was pretty deserted when we first arrived
                      before the semester started. It might not be ideal if you
                      are looking for a busy city life, but it is pretty close
                      to Canada, so we got the chance to head over to Toronto
                      before school started!
                    </p>
                    <p className="content">
                      There are several school facilities for use. There was a
                      school gym and ice rink just about 10-15 minutes from
                      where I had stayed. If you continue down from the shops,
                      you'll reach downtown Ann Arbor, with several unique
                      restaurants as well as thrift stores to explore! You can
                      also take the buses out further, though there is only one
                      major mall in the area, called Briarwood Mall. It has
                      pretty large clothing stores like Macey's and JC Penney's.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./UMich_pic6.jpeg")} alt="pic6" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <h2 className="subtitle_center">Getting Around</h2>
                          <p className="content_center">
                            The campus itself is quite spread out, with Ross
                            Business School located away from other buildings,
                            but it is a quick 10 minute walk to the shops and
                            food!
                          </p>
                          <p className="content_center">
                            As we were a group of 7, we mostly got around by
                            uber when travelling. It was alot more convenient
                            for us. But within Ann Arbor, you can take the buses
                            for free, with the school provided student pass :)
                            You can take buses out of the university area to get
                            groceries at Kroger, Target etc.!
                          </p>
                          <p className="content_center">
                            The nearest airport would be the Detroit airport. An
                            uber back and forth was around 40USD..? if I recall
                            correctly...but you can definitely buy tickets for
                            about 2.50 for a bus to the airport!
                          </p>
                          <p className="content_center">
                            I managed to visit Las Vegas, LA, Florida, Toronto,
                            Chicago and a few other places. But you could
                            definitely travel around more during the 4 months!
                            Here are some of my favourite snapshots from the
                            trip :)
                          </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <video
                            src={require("./UMich_vid2.mp4")}
                            width="100%"
                            alt="vid2"
                            autoplay="true"
                            Loop="true"
                            muted="true"
                          />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid divided="vertically">
                        <Grid.Row columns={3}>
                          <Grid.Column>
                            <Image
                              src={require("./UMich_pic8.jpeg")}
                              alt="pic8"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Image
                              src={require("./UMich_pic9.jpeg")}
                              alt="pic9"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Image
                              src={require("./UMich_pic10.jpeg")}
                              alt="pic10"
                            />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          <h2 className="subtitle_left">Cost of Living</h2>

                          <p className="content_left">
                            I would say the US in general would be on the
                            pricier end? But if you know where to look/go you
                            can definitely find many cheap alternatives :)
                          </p>
                          <p className="content_left">
                            You can get meals for around 15USD on average, and
                            the portion sizes are really huge! Cooking on your
                            own would definitely be much cheaper, but there were
                            definitely eat-out options around 10USD as well!
                          </p>
                          <p className="content_left">
                            One of my GO-TOs for a quick breakfast would be
                            Bruggers' Bagels (am i spelling it right? i can't
                            remember)! For lunch there are a variety of cuisines
                            so you won't really feel th lack of asian foods.
                            Just off the top of my head, some restaurants
                            include Joe's pizza, Slurping Turtle, HopCat (the
                            fries are nice!!), Tomukun BBQ, INSOMNIA COOKIES!!
                            and Chatime!!
                          </p>
                          <p className="content_left">
                            If you're lazy to walk there's also a cafe in Ross
                            Business School, though a full meal would be around
                            15USD? I think?
                          </p>
                          <p className="content_left">
                            You can travel out further to the Asian marts to get
                            your own sauces and ingredients, and theres also a
                            pretty good Chinese restaurent (imo) called
                            Evergreen :)
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={4}>
                        <Grid.Column width={4}>
                          <Image
                            src={require("./UMich_pic14.jpeg")}
                            alt="pic14"
                          />
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Image
                            src={require("./UMich_pic15.jpeg")}
                            alt="pic15"
                          />
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Image
                            src={require("./UMich_pic16.jpeg")}
                            alt="pic16"
                          />
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Image
                            src={require("./UMich_pic17.jpeg")}
                            alt="pic17"
                          />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image src={require("./UMich_pic12.jpeg")} alt="pic12" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <h2 className="subtitle_center">Accomodation Choices</h2>
                    <p className="content_center">
                      Accomodation choices around campus can range from as low
                      as arount 500USD a month to 1500USD a month.
                    </p>
                    <p className="content_center">
                      On the pricier end would be the apartments with ensuites,
                      like six11, zaragon, Arbor Blue, Landmarks etc. My friends
                      and I opted for a house for the 7 of us, which was about
                      700USD a month? I would have loved to experience the
                      apartments, but I'm definitely also grateful to experience
                      living in the same house as 6 others haha. It's also a
                      walkable distance to school, about 7 mins. Some apartments
                      are right across the street from Ross, which is good on an
                      extremely cold day if you're not a fan of winter.
                    </p>
                    <p className="content_center">
                      Do be careful and look out for terms and conditions
                      though, as the rent stated may or may not include
                      utilities. And for us, we had to pay quite a bit in
                      utilities compared to some apartment options, though on
                      the whole it is still cheaper!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row>
                        <p className="content_center">
                          Regardless, I had an amazing time, and though sadly my
                          exchange was cut short, just the opportunity itself to
                          experience life in a whole different part of the world
                          made it all worthwhile :)
                        </p>
                      </Grid.Row>
                      <Grid.Row columns={3}>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={8}>
                          <Image
                            src={require("./UMich_pic11.jpeg")}
                            alt="pic11"
                          />
                        </Grid.Column>
                        <Grid.Column width={4}></Grid.Column>
                      </Grid.Row>
                    </Grid>
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
