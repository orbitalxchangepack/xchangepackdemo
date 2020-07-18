import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class Aarhus extends Component {
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
              <h4 className="detail_location">Denmark</h4>
              <h4 className="detail_semester">Semester 1</h4>
              <h1 className="title">Aarhus School of Business</h1>
              <h4 className="author">
                authors: Daryl Hong, Huang Teng Yue, Sarah Chia | faculty: NUS
                Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Image src={require("./Aarhus_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={require("./Aarhus_pic2.jpg")} alt="pic2" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={require("./Aarhus_pic3.jpg")} alt="pic3" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <h2 className="subtitle_left">School Culture</h2>
                    <p className="content">
                      D: Chill culture, orientation programme was fun. However,
                      as I was travelling a lot, I was not able to join much
                      school events. There is a bar inside the school, where the
                      local students have mentioned that it was amazing, with
                      cheap alcohol. One thing I regret not doing was to spend
                      more time with the friends I made during orientation week.
                      Shoutout to my amazing buddy, Emma, for making me feel at
                      home! During the orientation week, we had events like
                      stand-up comedy night, free-flow drinks at a local bar,
                      exploring the city through an Amazing Race (The city
                      itself is small enough to explore on foot). That was
                      definitely very fun!
                    </p>
                    <p className="content">
                      S: Danes are super friendly!! There is quite a party life
                      in Aarhus, with a bar in the school compound HAHA. i think
                      it can be both fun + study focused. like they have study
                      groups/sessions for some modules as well!
                    </p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={require("./Aarhus_pic4.jpg")} alt="pic4" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      D: Aarhus really has a self-driven student culture, and
                      they do not take attendance in classes. You need to be
                      focused and be self-aware of the deadlines. Everything is
                      uploaded online on their website. I only went school for
                      around a month. However, it depends on your modules as
                      well. Finance modules might require more time and effort
                      compared to marketing for example.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      TY: My assessments were 100% finals and all of them were
                      conducted electronically at the exam venue so make sure
                      you treasure your laptops properly and don’t lose it if
                      not it’ll be lots if trouble. Some are open book and some
                      are not but I don’t think the difficulty varies alot with
                      this aspect, as long as you familiarize well with the
                      syllabus you’d be able to pass (with flying colours for
                      some) cus the profs are generally pretty lenient with
                      marking. D: Exams are either take home assignments (Done
                      within 72 hours), or taken in school (Open Book/Closed
                      Book).
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      BSP3701, MKT3415, FIN3701, FIN3703, etc.
                    </h4>
                    <p className="content">
                      D: I was able to clear a total of 24 MCs, BSP3701 (Strat
                      Management), MKT3415 Marketing in a Digital Age, and
                      another 12 MCs worth of MKT modules. I also did a module
                      about Denmark which was able to be mapped back to a MNO
                      random module. However, this school does not offer the 4
                      free MCs if you complete 5 modules there, unlike
                      Copenhagen. (Ps: I’ve heard from my juniors that Aarhus
                      has changed some of its module offerings so do constantly
                      check the school website for the latest updates on
                      modules!)
                    </p>
                    <p className="content">
                      TY: Mapped back 24MCs (6 mods) which is 30ECTs for
                      European schools, the maximum number of credits you can
                      bring back. My modules were 3 Fin3k modules under Topics
                      in Finance (which helped clear my fin spec electives),
                      Fin3701, Fin3703 (Fin core) and Bsp3701. I’ve learned that
                      in their education system, professors are required to be
                      active researchers in order to be able to teach, so that
                      means they actually know their stuff. Most times they make
                      learning in class a lot more interesting as they
                      frequently give their own inputs, perspectives and new
                      findings into teaching that are outside of what the boring
                      textbooks will teach.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column width={4}>
                    <Image src={require("./Aarhus_pic5.jpg")} alt="pic5" />
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      Aarhus is the 2nd largest city in Denmark, and it is known
                      to be a student city given the number of students staying
                      in the city itself. However, it is located very far from
                      the main airport, Copenhagen, around 3-4 hours by Bus or
                      Train which will cost around S$15-30 one way dependent on
                      how early you buy the tickets. There is Aarhus/Billund
                      airport nearby but they have lesser flights and
                      connections to other European hubs. The costs for the
                      shuttle buses to the airport also cost upwards of S$20 so
                      do factor this in when you are planning to travel often.
                      Often, I will combine different cities together and travel
                      at one go to save these small costs!
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./Aarhus_pic6.jpg")} alt="pic6" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      D: It is a bike city, so many of us rented bikes from
                      Swapfites, but we ended up taking the buses because it was
                      either too cold, or it was more convenient to take the
                      bus. TY: As Singaporeans there you’ll start to find
                      options to save money, for example knowing which bus lines
                      doesn’t require ticket checking, so you don’t have to buy
                      tickets for those trips. Buses are differentiated based on
                      their colours. For example, for blue buses, the bus
                      conductor will check for your ticket before boarding,
                      while yellow buses do random spot checks on whether you
                      did buy a ticket. Do your necessary planning of risk and
                      note the expensive fines you will incur if you do decide
                      to not buy the tickets!.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image src={require("./Aarhus_pic7.jpg")} alt="pic7" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      Overall, Denmark is expensive to eat out, and every time I
                      am in Aarhus, we usually buy groceries and cook at home.
                      Meals outside will cost a minimum of $S15, going up to
                      S$50 dependent on the cuisine.
                    </p>
                    <p className="content">
                      TY: Do not eat out unless absolutely necessary! (unless
                      during busy periods like exams when there’s no time to
                      cook). Service is extremely expensive there in Denmark, so
                      as students, we generally buy groceries and cook ourselves
                      everyday. There’s a huge supermarket 20min walk away from
                      my apartment so it’s pretty convenient! (bring your own
                      grocery bags, it’s easier, cheaper and more
                      environmentally friendly). You will need to pay for the
                      bags, unlike in Singapore. Basic groceries are around the
                      same price as Singapore like meat, vegetables, condiments
                      etc. But fruits are provided according to seasons (Eg:
                      There were no more peaches nearer to winter and imported
                      fruits are really really expensive so just stick to their
                      local products)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accomodation Choices</h2>
                    <p className="content">
                      D: If you choose the school accommodation, it is much
                      cheaper (I paid only around S$500 per month) for a
                      two-storey two bedroom house with own kitchen and toilet!
                      It is randomly allocated and my house is located around 15
                      minutes away from the school by bus (30 mins by bike). TY:
                      For AU, the school has both school dorms and properties
                      around the outskirts of Aarhus that they rent out to
                      students. So my apartment is right in the middle of an
                      estate, and my neighbours are all Danish families instead
                      of fellow students so it’s pretty cool and peaceful:) (the
                      stars that can be seen every night from my balcony made
                      exchange an even better experience) My accommodation is
                      the same as Daryl, it’s a 15min bus ride to the city and
                      15min bus ride from my apartment so it’s very central, But
                      one thing to note is that the intervals between bus
                      arrivals are HUGE so you’ll have to check the bus timings
                      carefully and make sure to not miss your bus if not you’ll
                      be late for class.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={require("./Aarhus_pic8.jpg")} alt="pic8" />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./Aarhus_pic9.jpg")} alt="pic9" />
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <h2 className="subtitle_left">Closing Thoughts</h2>
                    <p className="content">
                      D: I had no regrets choosing Aarhus. Not only were the
                      school curriculum chill (no attendance policy), i made the
                      best friends and had a great time cooking and sharing food
                      with them on the nights I was in Denmark. The Danish, even
                      though they look unapproachable, were actually super
                      friendly people! If I did not travel as much as I did, I
                      would definitely have integrated myself more in the school
                      culture and partied with them harder! If you are someone
                      who wants to have fun while staying in a safe and lovely
                      neighbourhood, I would definitely recommend this city!
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

export default Aarhus;
