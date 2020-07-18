import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../SchoolContent.css";

class Sydney extends Component {
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
                University of Sydney (aka the Hogwarts of Australia)
              </h1>
              <h4 className="author">
                author: Eleanor Wong | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row></Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      I must say, the school is actually super pretty! The biz
                      school is also newly renovated and had super cool seating
                      areas all around to have lunch in. Going in Sem 1 also
                      means you get to see the bright purple Jacarandas (cherry
                      blossom of Aussie) pop up around the school announcing the
                      start of Spring! There are a lot of activities you can
                      join in school and they are super affordable – it was only
                      $5 for membership, so you can pick up a new skill without
                      worrying about embarrassing yourself since you will never
                      see them again 🙂 There are also always events going
                      around in school if you are up for it. (My friend did yoga
                      with goats in the school courtyard and it still amuses me
                      to this day.)
                    </p>
                    <p className="content">
                      The students are generally all very friendly, albeit more
                      than we are used to! But locals mostly stick around with
                      themselves (which is no surprise, we do that in NUS too)
                      but they will make an effort to talk to you in
                      tutorials/project groups/clubs. A lot of students are very
                      career driven so many work part-time, and school isn’t
                      their main priority. But with their fair share of
                      Asians/Asian-Australians, some students are quite
                      hardworking. Though we had our fair share of fun-loving
                      ones who made project work an experience we rather forget.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      Some tutorials yes, but they will state it in the module
                      outline so just check! I generally didn’t have any but my
                      friends did! I still went though (old habits die hard) and
                      found myself a regular amongst the dwindling number of
                      classmates each week.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Exams are quite similar to NUS for the modules I took
                      (written, mcq midterms/open ended finals) but Australians
                      in general really like essays so be prepared to do a few
                      for assessments here! But please dont plagiarise, they are
                      super strict about it here. Presentations were also super
                      chill – no one really bothered to dress formally or
                      memorize their script.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      FIN3713, FIN4716, FIN3702, BA, MKT, Ops etc.
                    </h4>
                    <p className="content">
                      I mapped 3 fin mods (FIN3713 Bank Management, FIN4716 M&A
                      and FIN3702 Portfolio Management) and 1 EC mod (Am taking
                      ddp Biz + Ec). Take note that a lot of fin mods will
                      require you to clear FIN3017 Corporate Finance as a
                      pre-req! You will still have options without corp fin, but
                      doing it prior opens up a whole lot of modules. My friends
                      also managed to clear BA, Mkt and Ops mods. Probably one
                      downside is the maximum of 4 modules to map! It didn’t
                      hinder me since I have specific module requirements so the
                      extra mod European schools offer doesn’t benefit much.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      Both the school and the airport is in the city centre so
                      its easily accessible by bus/train. We stayed 15-20 min
                      ride from Sydney’s airport, and a 30 min walk from school.
                      Yes, we walked everyday because fitness but most
                      importantly all the places you want to go are easily
                      accessible from each other.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      The minimum fair for public transport is $2.40, which
                      sounds expensive compared to our $0.80 in Singapore (what
                      a blessing really!) but usyd gives concession cards for
                      students which is 50% off ride prices (so $1.20 min) and
                      Sunday fare in Sydney is capped at $2.40 no matter where
                      you go! So save all the far traveling for Sunday’s and
                      it’s quite manageable. (Btw, not all schools give
                      concession, UNSW didn’t, so we thank our lucky stars!)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Eating out is not cheap. A meal is minimum $10, even in
                      school. There are cheaper options from food kiosks and
                      food courts but generally, cafes and restaurants are the
                      main options. So cooking was our go to on weekdays and we
                      saved eating out for our weekends. Groceries are generally
                      quite affordable! Many supermarkets options (asian
                      supermarkets as well) around so prices are competitive and
                      you’ll find many things are cheaper than Sg. (Tip, buy all
                      the chocolate you desire to avoid regret when you pay
                      double in SG)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accomodation</h2>
                    <p className="content">
                      I stayed in a 2 bedroom apartment with 3 other girls. We
                      found it on Airbnb and negotiated for a better price since
                      we were staying long term. Campus accommodations in Sydney
                      are crazy expensive (can be up to 1600 per person/month).
                      Especially since there are many slots for Sydney, try to
                      find friends to get a place with as it can be cheaper. But
                      be prepared to pay if you want to stay super near to
                      school, which is in the city center. If you are staying in
                      a shared apartment, you are expecting to be paying around
                      800-1100 a month!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Ending Thoughts</h2>
                    <p className="content">
                      Aussie isn’t the top destination for many and
                      understandably so. The location is comparatively nearer
                      and more accessible than Europe/US. But there is a lot to
                      be discovered and enjoyed in Aussie that many fail to see.
                      I have the fondest memories chasing sunsets, watching
                      crashing waves at nearby beaches, eating the fluffiest
                      donuts, tasting the best ice creams (aussie dairy ilu),
                      and living a dreamlike 5 months with a group of friends I
                      call home. So if you love nature but need the convenience
                      of being in the city, can’t stand harsh weathers and
                      desperately need Asian food to survive, Aussie is probably
                      the choice for you 🙂
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

export default Sydney;
