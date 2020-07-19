import SchoolReviews from "../../SchoolReviews";
import Emoji from "../../Emoji";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class SouthernCalifornia extends Component {
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
              <h4 className="detail_location">Southern California</h4>
              <h4 className="detail_semester">Semester 2</h4>
              <h1 className="title">
                University of Southern California (USC) – Marshall Business
                School
              </h1>
              <h4 className="author">
                author: Tan Wee Ning | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}>
                  <Grid.Column width={3}></Grid.Column>
                  <Grid.Column width={5}>
                    <Image
                      src={require("./SouthernCalifornia_pic1.jpg")}
                      alt="pic1"
                    />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image
                      src={require("./SouthernCalifornia_pic2.jpg")}
                      alt="pic2"
                    />
                  </Grid.Column>
                  <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Grid>
                      <Grid.Column width={2}> </Grid.Column>
                      <Grid.Column width={4}>
                        <Image
                          src={require("./SouthernCalifornia_pic3.jpg")}
                          alt="pic3"
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h2 className="subtitle_center">School Culture</h2>
                        <p className="content">
                          The locals are superrr friendlyyy! Like I personally
                          loved every bits of interaction with the locals there,
                          and they are always giving out compliments so
                          generously <Emoji symbol="🙂" label="smiley face" />
                        </p>
                        <p className="content">
                          Is USC a party school? Definitely!! They have all the
                          Frat parties, a whole “Zoukout” inside the school and
                          lots of sports events for you to feel the true Trojan
                          pride! (FYI I was underaged in the first few months
                          when I went to USA, so I obviously did not party as
                          hard, but it was still fun). Just know that even if
                          you do not like to party, it’s perfectly fine, there’s
                          whole lots of other wholesome events to have fun in!
                          One of my favourite USC events was them paying for our
                          transport to Huntington Dog Beach for Corgi Beach Day,
                          where you get to see and play with all those furry
                          friends!! <Emoji symbol="🙂" label="smiley face" />
                        </p>
                        <p className="content">
                          It’s a super fun school, and like every other
                          exchanger, I honestly did not study much and spent
                          most of my free time just playing and stuff.
                        </p>
                      </Grid.Column>
                      <Grid.Column width={2}> </Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      This really depends on the module you take! I took FBE-459
                      and FBE-435 under Mick Swartz and I honestly skipped
                      almost every single one of his lessons. However, for some
                      other modules, I know from my peers that the professors
                      will drop at least one grade for students who miss more
                      than 3 lessons without valid reason! So, do your research
                      before you embark on any module!! (PS: You have 3 days to
                      add/ drop/ withdraw a module when you first start school
                      in USC).
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Usually open-book or cheat-sheet based. Also, most of them
                      are fully MCQ questions which is honestly a blessing{" "}
                      <Emoji symbol="🙂" label="smiley face" /> I had most of my
                      exams being 20MCQs for 2 hours HAHAHA.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">FIN etc.</h4>
                    <p className="content">
                      I mapped all finance modules! Financial Derivatives
                      (FBE-459), Investments (FBE-441), Applied Finance in Fixed
                      Income Securities (FBE-435) and Corporate Financial
                      Strategy (FBE-432).
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      It’s not the closest to the downtown but I guess if you
                      are okay with paying for UBER then I don’t think the
                      distance is a huge issue. Just remember, UBER/LYFT is
                      everywhere in USA so, for someone who could not drive, I
                      had no issue with travelling around. Also, if you are
                      ballsy enough, you can take the metro yourself (might be a
                      bit longer, but at least there’s no traffic jams), but
                      please make sure you are safe! I had a few close shaves
                      myself so in hindsight, I was lucky enough to not get into
                      trouble :”)
                    </p>
                    <p className="content">
                      Is the school itself convenient to get to the airport?
                      Honestly, if we are talking by public transport? It is a
                      big fat no! LA has the worst metro system and if we are
                      talking about cabbing, maybe a quick 30 minutes if you
                      manage to avoid their notorious traffic jam :”> However, I
                      would say this is really not an issue, as long as you make
                      sure you leave for the airport early.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      Is public transport cheap? If you are a cheapo and have no
                      fear of any repercussions, sure, the metro is honestly
                      free (because people usually do not tap in and there are
                      no gantries to stop you from entering the train platform
                      for most stations in LA).
                    </p>
                    <p className="content">
                      Sadly, if you want to be a law-abiding citizen, there’s no
                      student fare, and I can’t really remember well but I know
                      it’s quite expensive because USA charges like a flat fee
                      for any distance you travel (around USD$2.50 I think).
                      Hence, I usually just UBER/LYFT, for comfort and safety.
                      Also, Uberpool is really very cheap in the US and USC
                      provides FREE UBER/LYFT services to and fro areas within 2
                      km radius of USC. Flights around USA are pretty expensive
                      as well I must say.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Eating out EVERYDAY is a huge luxury. A normal egg fried
                      rice costs USD$8 for takeaway. If we are talking about
                      dining in, it will be at least USD$20 because they have an
                      insanely high tax as well as tips culture.
                    </p>
                    <p className="content">
                      Also, I would say that their groceries are pretty cheap,
                      especially if we stop converting USD to SGD :”) I love
                      eggs, milk and turkey, and I would say they have those
                      things really cheap there! Also, you will love Target and
                      their insanely cheap pillows, mugs etc., as well as their
                      Dollar Tree shops, where things get sold at USD$1 each.
                      ALSO, CAN I JUST SAY, THEY HAVE FREAKING CHEAP HÄAGEN-DAZS
                      EVERYWHERE?? I eat a tub of ice-cream like every week!
                    </p>
                    <p className="content">
                      Basically, it’s the US, and I would say everything is
                      pretty expensive if you look at our exchange rate.
                      However, if you spend wisely and not splurge excessively,
                      it’s worth it.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">
                      I stayed in school provided accommodation (Troy Hall)!
                      However, a good tip is to really try to get a two-persons
                      apartment at the very least! I stayed in a 5-persons
                      apartment sharing my bedroom with 2 other graduate
                      students, and I would say it was not an experience I would
                      want to go through again. Personal space is sometimes
                      important <Emoji symbol="🙂" label="smiley face" />
                    </p>
                    <p className="content">
                      If you want higher end living conditions, I suggest you
                      try Lorenzo! However, it is a lot more expensive! (They
                      are at least USD$1,100 per month vs Troy Hall’s USD$700
                      per month) Also, Troy Hall is like a 10-minute speed walk
                      from the Business Schools, which I would say is the reason
                      why I wake up late every morning and run to classes
                      because, it’s really too convenient.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">
                      Additional Things to note
                    </h2>
                    <p className="content_center">
                      USC is situated in a relatively dangerous area, so try not
                      to go out alone late in the night. Always be alert of your
                      surroundings and keep up with the news! STAY SAFE AND
                      ENJOY <Emoji symbol="🙂" label="smiley face" />
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

export default SouthernCalifornia;
