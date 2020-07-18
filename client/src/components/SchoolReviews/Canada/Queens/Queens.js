import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../../SchoolContent.css";

class Queens extends Component {
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
              <h4 className="detail_location">Ontario</h4>
              <h4 className="detail_semester">Semester 1, 2</h4>
              <h1 className="title">Queens University</h1>
              <h4 className="author">
                author: Charmaine Goh (Sem 1), Qian Qi (Sem 2) | faculty: NUS
                Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}></Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      C: Locals are very friendly!! I think Queens can be
                      considered quite a fair share of both? They party hard &
                      study hard too! Sometimes they have house parties on
                      weekends (if you go in sem 1 there’s this event called
                      homecoming & its lit!!) Study wise I think its pretty
                      manageable. I feel that students there are very passionate
                      about what they study (not just for grades) and are very
                      diligent because they are legit curious to find out more
                      about the mods that we learn & i think that’s very hard
                      warming to see!
                    </p>
                    <p className="content">
                      QQ: The locals are rather friendly and helpful. Also, when
                      taking business modules, there’s a good chance that half
                      of your class are exchange students. Teachers are also
                      rather encouraging but they tend to have a lot of
                      pre-class readings to facilitate class discussions. But..
                      I mean, this place doesn’t have much activities for you to
                      do…so you pretty much will have a lot of time to READ YOUR
                      NOTES YO. It is quite a party school with house parties
                      every other day and cheap club entry rate (5CAD).
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      C: Yep they mark attendance in classes and participation
                      accounted for about 10 -15 % of the grades. But that being
                      said some profs allow you to skip a certain number of
                      classes or are ok if you miss some classes (if you inform
                      them before hand) – this is dependent on profs though!
                    </p>
                    <p className="content">
                      QQ: Yes they are quite strict with attendance, you sign
                      your own attendance on name cards, but they are flexible
                      allowing up to 3 missed classes before you have to provide
                      an MC. (I have seen exchange students not attend a single
                      class but at your own risk~~)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      C: Pretty much like NUS – I had 1 mid term and 2 finals.
                      But most of the coursework are assignments/case during the
                      sem.
                    </p>
                    <p className="content">
                      QQ: They have mid-term assignments, mid-term test, as well
                      as other deliverables, very much like NUS. NOT A 100% EXAM
                      policy, but is better IMO. But I heard for Finance
                      modules, you can’t just do well for your mid terms and
                      skip finals, they will average your grade, and it has to
                      be a certain percentage in order for you to fulfill the
                      module’s passing requirements, SO YOU CANT GHOST FINALS
                      for some finance modules)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">MKT, DOS, BSP etc.</h4>
                    <p className="content">
                      C: I mapped the following:
                      <ul>
                        <li>
                          MKT3722 Research for Marketing Insights – COMM332
                          marketing research
                        </li>
                        <li>
                          MKT3761 Topics in Marketing – COMM431Advanced Topics
                          in Marketing
                        </li>
                        <li>
                          DOS3703 Service Operations Management – COMM 343
                          Strategic Service Operations
                        </li>
                        <li>
                          DOS3713 Project Management – COMM95 Project Management
                        </li>
                        <li>
                          BSP3701 Strategic Management – COMM374 International
                          Business Strategy
                        </li>
                      </ul>
                    </p>
                    <p className="content">
                      QQ: The course offered in winter is much lesser but in
                      other semesters I remembered they have a pretty extensive
                      list. Also if you are going in Year 2, you probably have a
                      lot more modules you can map.
                      <ul>
                        <li>
                          COMM336 Consumer Behaviour mapped to MKT3702 Consumer
                          Behaviour
                        </li>
                        <li>
                          COMM374 International Business Strategy mapped to
                          BSP3701 – Strategic Management
                        </li>
                        <li>
                          COMM221 Introduction to Finance ( (100% online module,
                          WOOHOO?) mapped to FIN2704 – Introduction to Finance
                        </li>
                        <li>
                          COMM405 New Business Development mapped to BSN3702 New
                          Venture Creation
                        </li>
                        <li>
                          COMM190 Introduction to Business and Technology mapped
                          to MNO3761Y General management module
                        </li>
                      </ul>
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      C: School is located in a small town called Kingston.
                      There’s an airport there but not very frequent flights.
                      Nearest big cities are Toronto/Montreal which are about
                      2.5 hours away. You can go to these cities by Bus
                      (Megabus/Greyhound) or Train (Viarail). For one time
                      travel i think bus might be a cheaper option (not too sure
                      on this) but I got a student pass at viarail & its pretty
                      convenient to get around. The train timings are pretty
                      frequent & the experience is comfortable! Only bad side to
                      this is the student pass is quite costly (about $800 SGD
                      for 50 one way trips ) but overall i think it is worth it!
                      I use the train quite often & the train goes to many
                      cities like Ottawa, Quebec City, Montreal & Toronto.
                      Usually a ticket 2 ways will cost about 150+? I had about
                      20 trips So i definitely made the pass worth it!
                    </p>

                    <p className="content">
                      QQ: My opinion might be skewed because I love the bustling
                      city life, but Kingston is no Toronto ya, it is a small
                      quiet town. If you are looking for huge shopping malls
                      with international brands, you will not find it here.
                      (Think: when school semester ends, it is almost an empty
                      town cause students go home to Vancouver, Toronto etc). It
                      takes approximately 2 hours by car to Toronto Pearson
                      Airport (Use poparide: ~$20-$40), Or 4 hrs by Megabus
                      (~$45), 2.5hrs by VIA rail (Ticket price varies if you can
                      snag the escape fares). But some of my friends enjoyed
                      this slower pace of life. I think life gets pretty good
                      when you hang out with friends (you will see people from
                      NUS, NTU, SMU a lot of other exchange students as well),
                      travel on weekends, hit the gym. THEY HAVE A HUGE 4 storey
                      GYM THAT IS AWESOME BTW.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      QQ: Within Kingston itself, most people travel by bus, and
                      it is free for students. There are 2 main grocery stores
                      there, Metro (Offers 10% discounts from Tues -Thurs), Food
                      Basics (10% on Tuesday). You could use Uber travelling
                      home from a late night out and it is generally the same
                      price as Singapore. Oh, don’t worry they have a few Asian
                      marts for your Asian ass too!!!{" "}
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      C: Eating out can cost about $10-$20 a meal depending on
                      how much you are willing to spend. Groceries are pretty
                      ok. There’s weekly student discount at the supermarket on
                      selected days of the week!
                    </p>
                    <p className="content">
                      QQ: Groceries: Pretty much more expensive than in
                      Singapore (Eg Poultry like chicken is about~$4, Broccoli
                      is about ~$3-4) But generally it is quite comparable with
                      some items such as ICE CREAAAAAMMM being way cheaper
                      (THINK: Ben & Jerry’s @$5ish during discount). Transport
                      around Kingston: FREE Dining out: ~$20 including tax,
                      including tips. Advisable to cook more frequently (TIP:
                      Get masterchef housemates like mine)
                    </p>
                    <p className="content">
                      Travelling intercities: Mainly people travel to Montreal,
                      Quebec (LOVE QUEBEC), Toronto (THINK ALOT OF GOOD FOOD
                      PLACE + OUTLET SHOPPING) , Vancouver, Calgary (Banff Area)
                      can get expensive (but with bigger group, wiser to rent
                      cars and go together). For nearer cities, including cost
                      of car + accomodation + tickets to attraction + food is
                      around ~$600 for a 4D3N)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">
                      C: There’s a hostel which exchange students can apply for
                      but i heard its pretty hard to secure a spot there. Almost
                      everyone i knew rented a house nearby the school (When i
                      say near its like super near – alot of student walk to
                      school) But my house was a little far off so we had to
                      take a bus to school everyday. My housemates & I paid
                      about $3000 monthly rent for the house so about ($700+ per
                      person)!
                    </p>
                    <p className="content">
                      QQ: All of us stayed in an AirBnb, rental apartment.
                      (Rental is about ~$700 including all utilities).
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

export default Queens;
