import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../SchoolContent.css";

class NYU extends Component {
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
              <h4 className="detail_location">New York</h4>
              <h4 className="detail_semester">-</h4>
              <h1 className="title">New York University</h1>
              <h4 className="author">
                author: Deborah Khoo | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}></Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      NYU is definitely both a study and play hard school- we
                      don’t have classes on Fridays so students would party on
                      Thurs, Fri, and Sat night. Classes can be competitive due
                      to the participative nature where students are encouraged
                      to discuss and speak up, but it’s all in good fun. I loved
                      my professors because they really put in effort to know
                      every student and gave us resources beyond the class
                      syllabus such as linking us up with industry
                      professionals, and really wanted to stay in touch! NYU’s
                      student population is very diverse as well, so you won’t
                      stick out – Finance classes tend to be 70% Asians. Local
                      students are pretty friendly and I did manage to make
                      friends through classes and international student
                      sessions, and we do occasionally talk online. We made
                      friends with other exchange students as well, and even
                      travelled with them, which was an enlightening experience.
                      The exchange students team tried to host events for us
                      such as watching ice hockey games.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      Participation can be pretty heavy especially in my classes
                      (MKT and BSP3k) and it went up to 30%. But profs do give 3
                      free classes for you to skip.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Exams are in person, but for the mods I did, the weightage
                      was split across participation and project work so my
                      final exams were only 20% of my grade.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">FIN, MKT, BSP3k etc.</h4>
                    <p className="content">
                      NYU offers great mods for marketing students! But NYU is
                      known for their finance curriculum so I would recommend
                      taking a finance mod even though there’s a limit to 2 FIN
                      mods. I mapped 3 MKT mods, BSP3k, and FIN2k. The other
                      exchangers I went with were finance students so they
                      mapped NYU accounting and econs mods back to NUS as
                      finance mods. Damodaran also teaches equity val here!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      NYU is a city campus, just like SMU. So 4 blocks behind is
                      the main shopping district (Soho) and Greenwich, where NYU
                      is located, is also home to Washington Square Park, great
                      cafes, and amazing nightlife. BONUS: There’s a radio
                      station just around the corner from NYU so we’d frequently
                      spot celebrities there. I met quite a number of
                      celebrities in the area so it’s always an exciting
                      experience! NYC has 3 nearby airports, costing about US$60
                      via Uber/ Lyft pool to any. You could take the subway but
                      there are rarely lifts/ escalators so baggage would be an
                      issue. The commute is also about an hour via Uber/ Lyft
                      due to heavy traffic.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      The subway is 24/7 and it’s really convenient! It’s a flat
                      fare of US$2.50 per way, which has its pros and cons.
                      Because of that, we ended up walking a lot, because it’s
                      cheap, convenient, and New Yorkers don’t care about
                      traffic lights, making it pretty fast as well. There’s no
                      student fare but my friends who stayed in Brooklyn bought
                      a monthly pass for about US$120. We would Uber/ Lyft at
                      night too because it’s really cheap and a lot safer! It
                      could be US$4 for an Uber Share for 2 for 4-5 subway
                      stops, which is a lot cheaper than a subway ride.
                      Travelling around the US was also pretty pricey, where
                      plane tickets would cost $300 cross country, so we’d bus
                      to nearby places to save costs.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      The cheapest meal around school was US$5, from a Mexican
                      meal truck that you’d see in TV shows. Lunch time deals
                      are about US$10, and cafe food would be about US$30 for 2
                      people. US has a tipping culture as well, which would be
                      10-18% of the original bill. Don’t try to evade tipping –
                      my friend got chased by the waiter for doing that. US food
                      portions are also huge so my friend and I shared a lot to
                      save costs.
                    </p>
                    <p className="content">
                      We also used discount apps and as many promo codes and
                      free trials for food deliveries, gym access, and streaming
                      subscriptions. Grocery-wise, stay away from Whole Foods!
                      It’s really pricey and not worth it! We mostly shopped at
                      Trader Joes because it was cheaper and had a variety of
                      ingredients. The shopping was good though, many brands
                      were cheaper than in Singapore, and outlets were only a
                      30min Uber ride away from NYU. NYU gave us free museum
                      access to MOMA, and the MET had Friday nights free too.
                      Broadway shows were >$100 even with NYU discounts/
                      Broadway Roulette. Additionally, NYU makes you buy a
                      compulsory health insurance plan which is about US$200.
                      Overall, NYC is really really expensive to live in, so be
                      realistic about budgeting when applying.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">
                      We chose to stay off campus because campus accommodations
                      were US$9k for a three person shared room, including a
                      compulsory meal plan. We valued convenience over price and
                      size, so we paid US$3k/month for a two bedroom studio
                      apartment in Soho, which was 10minutes from school.
                      However, our apartment was tiny – there was no living
                      space, only a kitchen area and the rooms were about the
                      same size as Halls. It did come with free cleaning and
                      free laundry, which was really convenient. Our friends
                      stayed in Brooklyn for a much larger space at the same
                      price, but we knew other exchangers who managed to find
                      US$1k/ rooms in Brooklyn. If you’re planning to stay in
                      Manhattan/ near school, be prepared to pay.
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

export default NYU;
