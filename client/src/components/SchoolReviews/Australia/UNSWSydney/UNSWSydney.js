import SchoolReviews from "../../SchoolReviews";
import Emoji from "../../Emoji";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class UNSWSydney extends Component {
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
              <h4 className="detail_location">Sydney</h4>
              <h4 className="detail_semester">Semester 1</h4>
              <h1 className="title">
                University of New South Wales (UNSW Sydney)
              </h1>
              <h4 className="author">
                author: Chan Jie Ru | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}>
                  <Grid.Column width={3}></Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./UNSWSydney_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./UNSWSydney_pic2.jpg")} alt="pic2" />
                  </Grid.Column>
                  <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      0 racism honestly. Already have a strong Asian culture –
                      loads of overseas students from CN, MY, KR, INDO, HK.
                      Locals are super friendly, but i would say you have to
                      take initiative too but just talk to anyone. Had loads of
                      exchange kids from the other side of the world so my super
                      close friends were from Europe. The school organises a
                      party maybe once per month but I never went as I did not
                      want to go alone, and my friends were not interested.
                      However, it did seem fun though, with alcohol and animal
                      face paintings and neon lights. Every month, they also
                      have an event on campus, to drive awareness about a social
                      change or just some clubs recruitment drive so go down,
                      get free food and potted plants! Mingle with locals and
                      don’t be as lazy as my friends!!!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      They do mark attendance in classes but u have 2 days out
                      of 11 lessons to call in sick~
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      I had no final exams so only tests and it differs… I have
                      like those with 10 MCQs and 2 SAQ, and also those with
                      essay questions. One of the cool things about this school
                      is that they have their exams in the racecourse!! (we have
                      a horse racecourse near our sch so it’s one of the exam
                      venues for our school!)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      MKT3702, BSP3701, MKT3717, MKT3711 ETC.
                    </h4>
                    <p className="content">
                      MKT3702 Consumer Behaviour, BSP3701 Strategic Management,
                      MKT3717 Product and Brand Management, some sociology mod
                      >> Mapped to NM3741, some random biz mod called
                      Entrepreneur Ecosystems >> Mapped to NM3741 (Context: im
                      taking BIZ + CNM) You can also take MKT3711 Services
                      Marketing and events marketing, which is mappable to the
                      MKT SEP Departmental modules!
                      <p className="content">
                        Fun fact: approach Jessie + write in to UNSW and (try
                        to) request to overload!! (Australian schools only allow
                        4 mods, but I managed to clear 5 modules :D) Also, be on
                        the toes for tutorial bidding cos i did it late and was
                        not able to secure tutorial slots for 4MKT+1BSP that I
                        initially planned for.
                      </p>
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      The school is located in a great place, and it is around
                      45min from the main city. They built a new railway station
                      right at our doorstep (just after we left, probably around
                      4 stops to the city). It is literally 20 steps away from
                      the doorstep and another 20 steps to reach school. The
                      business school is on the opposite end of the school, so
                      you need another 15 minutes! My business modules were not
                      in the business school though, for some reason!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      Travelling around is not cheap, and there is no student
                      fare for UNSW students! Only the USYD students has a 50%
                      student fare
                      <Emoji symbol="🙁" label="unimpressed face" />
                      One trip to city (~40 min bus ride) is about $4? But
                      there’s a fare cap of $2.40 on Sundays so we travel like
                      crazy on Sundays.
                    </p>
                    <p className="content">
                      Alternatives: 1. Walk (Sydney weather is cool and windy
                      and not humid so honestly feels great) 2. Take the school
                      shuttle bus to our paddington campus (which is closer to
                      city and walk. Just do the necessary planning, you can
                      save here and there from transfers aka 1h transfer buffer
                      – pls be literate in this sense. Also, the locals are
                      quite careless so you might be able to pick up some things
                      on bus rides (I picked up an “Ezlink card”, a iPhone, a
                      bottle of drink and a purse before).
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Eating out is quite expensive, for example: Mala tang is
                      about $13 per person, Cafe food is about the same price as
                      SG but 1.5x the portion, Asian food is like $12 for fried
                      rice but 1.5-2x the portion so we always share. I highly
                      recommend Betty’s Burger though!!
                    </p>
                    <p className="content">
                      Groceries shopping is super therapeutic. Chicken breast is
                      $10/kg, minced beef ~$12/kg, milk $2.79/2L, Phil Cream
                      Cheese is $4.30/block – for some comparison. Dairy
                      relatively cheaper but ur Asian vegetables are like $2 for
                      one bunch! You can try visiting the farmer’s market for
                      cheaper produce! They also have those 1/2 price promos on
                      snacks and ice-cream ($4.50 AUD for Reeses tub
                      icecream!!!!! and $2AUD for lindt choc bar. Check online
                      for promos before buying since they release the promotions
                      two days in advance!!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accomodation</h2>
                    <p className="content">
                      We stayed at Hamlin House (Search it on
                      hotelesque.com.au), which was recommended by seniors. It
                      was only a 1min walk to school!! Compared to University of
                      Sydney (USYD), we are closer to the airport, just about
                      ~45min direct bus ride. We had a group of 8 NUS students
                      from SDE; Architecture, and we shared two units right
                      beside each other. We had so much fun!! The two units
                      upstairs were occupied by students from NTU so we also had
                      good egg tarts and baking barters. When they left ,we
                      raided their fridge for lindt chocolate as well so life
                      was pretty good. I was sad we were not able to have as
                      much interactions as I would have loved.
                    </p>
                    <p className="content">
                      Campus life could be quite fun too but as with all school
                      campus, u might meet super introverted hall mates.. or
                      those that keep the common areas unkempt. Or you could be
                      lucky to have those that cook a second serving for u so it
                      really depends!! Just try ur best to go out and have fun
                      and talk to random strangers like when u r shopping (i.e:
                      I asked the person beside buying spinach, how she would
                      cook that so, why not?)
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

export default UNSWSydney;
