import SchoolReviews from "../../SchoolReviews";
import Emoji from "../../Emoji";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class Washington extends Component {
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
              <h4 className="detail_location">Washington (not DC)</h4>
              <h4 className="detail_semester">Semester 1</h4>
              <h1 className="title">
                University of Washington (UW)* (Foster School of Business)
              </h1>
              <h4 className="author">
                author: Chen Xinyu | faculty: NUS Business School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Image src={require("./Washington_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={require("./Washington_pic2.jpg")} alt="pic2" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={require("./Washington_pic3.jpg")} alt="pic3" />
                  </Grid.Column>
                  <Grid.Row>
                    <p className="content_center">
                      * before you assume this refers to the capital of USA,
                      it’s not! hahah many people think that they’ll be going to
                      DC but the Washington in UW actually refers to Washington
                      state, which is all the way in the west coast while DC is
                      in the east coast. It’s a common misinterpretation hehe
                      one of my exchange friends only realised when she reached
                      Seattle so that was pretty hilarious. So take note ya!
                      Won’t wanna be planning your entire exchange thinking that
                      you’ll be in the east coast then end up all the way at the
                      other side of America
                      <Emoji symbol="😛" label="sticking tough out face" /> If
                      you’ve never been to the states, it’s huge! takes about 6
                      hours by plane from one coast to the other so getting your
                      school location right would be a good place to start your
                      research/ exchange planning.{" "}
                      <Emoji symbol="🙂" label="smiley face" /> Ah if you’re
                      wondering where “Seattle” popped up from, that’s the city
                      that UW is located in (and basically your exchange “home”
                      where you’ll be in most of the time, or not, depending on
                      how much travelling you’re going to do HAHA) So UW’s in
                      Seattle, which is in Washington state, in the U.S., hehe
                      now that we got that settled, let’s dive into the school
                      itself!
                    </p>
                  </Grid.Row>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      Once you reach America (or if you’ve been before/
                      interacted with Americans), you’ll realise that majority
                      of them are super friendly and always so eager to strike
                      small-talks! That is actually one major thing I really
                      miss, just casually telling the ice-cream girl about your
                      day and shouting thanks across public busses to the
                      drivers before alighting. :”) Thus similarly, this is the
                      case in school as well. However, that being said, don’t
                      expect to immediately make lots of friends. Small talk is
                      easy and very often but going a bit further to form
                      friendships from mere acquaintances will require a bit
                      more effort. There is a local term dubbed “Seattle Freeze”
                      which refers to how Seattle is one of the hardest cities
                      to make friends in. We didn’t quite understand it when we
                      first reached but we slowly came to realise where that
                      came from.
                    </p>
                    <p className="content">
                      However, don’t be scared off by that! Firstly, it’s a
                      generalisation and secondly, it’s how much you want to
                      make local friends too. I feel it’s really up to you and
                      what you want to gain out of your exchange. Many people
                      sign up for exchange with friends and that’s great, akin
                      to a really extended holiday with some of your bestest
                      pals. But if you’re going in with the mentality to explore
                      and make new friends in totally unfamiliar environments,
                      then you’ll naturally want to expose yourself more to
                      socialise and make the additional effort to forge new
                      bonds. In that aspect, I would say UW is pretty great.
                      There’s a whole lot of orientation activities (esp if
                      you’re going in sem 1, since it’s the start of the
                      academic year, not sure if that’s the case if you go in
                      sem 2), just for exchanges and international students
                      alone, their international office/team (known as FIUTS)
                      plans a whole ton of activities and events that you can
                      sign up for in the weeks leading to the semester as well
                      as first few weeks. And that’s not including the
                      school-wide orientation activities that you can sign up
                      for as well!
                    </p>
                    <p className="content">
                      In terms of party/study school, I would say UW is more
                      academic in general but as with every school, there are
                      party crowds. And yes like what you have heard/seen from
                      America culture influence, there are fraternity and
                      sororities which mean… frat parties!!! And again, it’s
                      really up to you. So depending on what kind of friends and
                      social circles you choose to mix, you could be exposed to
                      the really academic driven culture or party culture of UW.
                      Honestly, I wouldn’t say that their lessons are missing
                      any much of the academic rigour we have in NUS Biz, class
                      participation is rampant and you have your fair share of
                      projects as well. A note on class part though: I feel that
                      it could be the way that they were brought up and/or the
                      culture that professors create, I truly enjoyed listening
                      to the class participations while I was there. More often
                      than not, students speak because of their inclination to
                      value-add to the current topic and professors facilitate
                      this very well by bouncing ideas off students, often
                      generating lively and thought-provoking conversations.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Grid divided="vertically">
                      <Image
                        src={require("./Washington_pic4.jpg")}
                        alt="pic4"
                        width="50%"
                      />
                      <Image
                        src={require("./Washington_pic5.jpg")}
                        alt="pic5"
                        width="50%"
                      />
                      <Grid.Column width={16}>
                        <Image
                          src={require("./Washington_pic6.jpg")}
                          alt="pic6"
                        />
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      Sadly (for us exchangers), yes attendance is strict.
                      However, for a majority of modules, professors do give
                      some lee-way. For example, you get to skip 2 lessons
                      without any reason required, or have other ways (they call
                      it extra credits!) to get those participation/attendance
                      points or just boost your score for that module in
                      general. Thus, one feedback I can give is to really plan
                      your timetable well! This way, you will still be able to
                      travel loads while meeting your attendance requirements.
                      For example, I had only one class on Monday and Friday was
                      my free day — in other words I technically have long
                      weekends. I would leave Seattle on Thursdays after my
                      lessons or Friday early morning and return late in the
                      night on Sunday or early Monday when I travel out! As the
                      sem is short (they go by quarters!), there is also no
                      recess week but there’s still a reading week. And
                      definitely public holidays like thanksgiving etc. So if
                      you’re looking to travel a bit, do take these into
                      consideration when you plan them. Who says you have to
                      skip school to travel! I managed to go to quite a few
                      places like Portland (0 taxes!! and not far from seattle,
                      highly reco a trip down to do all your shopping), Texas,
                      Vancouver and Victoria in neighbouring Canada (Washington
                      state is right at the border so it’s really convenient to
                      cross over to Canada!) and ALASKA !!! all during the
                      semester while hitting the strict attendance requirements.
                      With some planning, nothing is impossible. :DDD Actually
                      just take note of what I mentioned (timetable! ph and
                      school breaks), I didn’t even plan my travels much, I
                      mostly booked them very last minute and all planned after
                      I reached and settled in to UW HAHA so don’t be scared of
                      exchange planning ya!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      Like mentioned, very similar to NUS Biz. Mid terms,
                      Finals, Projects and Presentations, Class participation,
                      nothing very out of the ordinary!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">FIN, MKT etc.</h4>
                    <p className="content">
                      I’ll be answering this in terms of UW’s business school,
                      aka Fosters, because as NUS Business students, you are on
                      exchange as part of Fosters program and I took all
                      business modules in my time there. I can’t remember all
                      the mods offered and you can probably check the list on
                      edurec yourself to see what have been mapped in the past
                      but in general, I would say it’s pretty ideal for
                      Finance/Marketing students. There were many finance
                      modules offered, including core and spec mods (I cleared 3
                      fin3k and 1 mkt3k as I’m doing fin-mkt double spec) as
                      well as a decent number of marketing modules. Oh, one con
                      would be that you only have enough credits to take 4 mods!
                      If you want to take more, you would have to pay and it
                      wasn’t a small sum, around 2k sgd if I remember correctly
                      to get additional credits enough to map 5 modules. So if
                      this really affects your academic plan, you may have to
                      reconsider coming here (but it would be such a shame
                      <Emoji symbol="🙁" label="sad face" />
                      because UW is really so pretty and seattle too! Honestly,
                      one of the prettiest, if not the prettiest campus I have
                      been to. They have a library that looks like it was from
                      the sets of Harry Potter and a cherry blossoms quad that
                      we unfortunately didn’t get to see them bloom as I went in
                      sem 1. you’ll probably get to see that beautiful sight if
                      you’re going in sem 2!)
                    </p>
                    <p className="content">
                      Of course, I think you have the option to try and apply
                      for other mods outside of Fosters (if you’re thinking of
                      mapping U/Es) but I’m not sure how easy that will be in
                      terms of the process and if you will get your mods because
                      for us, we get the mods after their local students opt for
                      them so if you’re from another faculty, you may be placed
                      on even lower priority. That being said, you could always
                      attend classes when semester starts even if you are not
                      officially enrolled in that module as many students there
                      take the first few lessons as “trial” and add-drop is a
                      lot more common there!
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column width={4}>
                    <Image src={require("./Washington_pic7.jpg")} alt="pic7" />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      Pretty good location. About half an hour into downtown
                      (which is like our CBD/Orchard) where most things are by
                      public transport. It’s on the other end of the Link (their
                      version of MRT) from the airport though, kinda like Boon
                      Lay and Changi Airport HAHA but actually after you travel
                      around a bit, an hour journey becomes a lot more bearable.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={require("./Washington_pic8.jpg")} alt="pic8" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      As a UW student, you actually get to take all public
                      transport (buses and trains) FOC with your Husky Card
                      (their version of our matric card). Okay technically it’s
                      not free, you pay a one off fee of around $80 if I
                      remember correctly as part of your school fees but it is
                      really worth! Usual bus/ train fares can go up to 2-3 USD
                      one way so this is really convenient and you save a bit
                      too. Their public transport is actually very convenient,
                      definitely not comparable to what we are used to in SG but
                      after you travel out to other cities you realise it’s
                      already not bad! At least you don’t have to Uber/Lyft
                      everywhere (ahem L.A.) but ya you will really come to
                      appreciate Sg’s public transport after exchange man :”)
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      As expected of America, living is not cheap. When we first
                      arrived, it was quite painful for us as we tend to convert
                      back to SGD all the time. After a while, I decided to just
                      take USD as it is and it did feel psychologically better
                      haha I think you’ll slowly come to get used to the prices.
                      Tax in seattle is high (10%) and on top of that, at places
                      where you get any form of service (yes hair cuts included)
                      you are expected to tip. So whenever you see a price
                      marked on a menu when eating out, always do a quick
                      x1.2/1.3 in your head to prevent getting a shock when
                      paying. So yes, America is definitely not a great choice
                      if you’re on a very tight budget but!! there are some
                      savings you can get such as shopping (ranging from brands
                      such as American Eagles/ A&F to Colourpop/ Glossier to
                      even Apple! side note: I bought my iPhone 11 at almost
                      half the price of that if I were to buy in SG at that
                      time) but shop smart! make use of places with low to zero
                      taxes and deals like Black Friday!!! Thus in general, yes
                      cost of living is high but I guess it sort of compensates
                      by savings you can get elsewhere?{" "}
                      <Emoji symbol="😛" label="sticking tough out face" />
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Accommodation</h2>
                    <p className="content">
                      I stayed on campus because I went on exchange with the
                      mentality to explore and make friends so I felt hostel
                      would be best for that. However, I believe you can rent
                      apartments outside at likely slightly lower prices (when I
                      mentioned cost of living is high, it literally extend to
                      everything including dorm fees! I remember it was quite
                      exorbitant) so it’s really up to you! If you’re heading
                      there with friends and y’all want to live together,
                      renting your own space makes sense! Else, hostel would be
                      a good choice, not just in terms of socialising wise but
                      also safety! If you’re comparing to SG, America is
                      definitely not the best in terms of safety. Seattle does
                      have a pretty large homeless community too and thus, you
                      may feel a bit unaccustomed and scared even (especially at
                      nights). Thus, staying on campus would also give you a
                      higher sense of security. Not trying to scare you off, but
                      I feel we have to be realistic here too ya. If you’re
                      really super uncomfortable with the thought of
                      homelessness around with the smell of weed on the streets
                      (yes that is legal in Washington state), you may want to
                      reconsider. But!!! If you’re up to putting yourself
                      outside of your comfort zone, really exploring the world
                      out there (you’ll realise SG is really so so small)
                      compared to being so sheltered inside our little bubble,
                      you’re up for some of the most magical and beautiful
                      sights (think grand canyon!! yosemite!! northern
                      lights!!), some of the warmest people and an adventure of
                      a lifetime~
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row>
                        <p className="content_center">
                          Ultimately, i can only say exchange is really what you
                          make it out to be! Besides some set infrastructure
                          (like modules, transportation etc), everything else is
                          pretty much your choice. How much you want to spend
                          (if you really want to be thrifty, you can cook your
                          own meals, save on flight tickets by choosing
                          overnight buses instead, etc), if you want to immerse
                          yourself in the academic hustle by joining investment
                          /consulting clubs or experience the uniquely American
                          party culture, the options are endless! Just remember
                          to keep an open mind and all the best !!
                          <Emoji symbol="🙂" label="smiley face" />
                        </p>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Grid.Column>
                            <Image
                              src={require("./Washington_pic9.jpg")}
                              alt="pic9"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Image
                              src={require("./Washington_pic10.jpg")}
                              alt="pic10"
                            />
                          </Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Image
                            src={require("./Washington_pic11.jpg")}
                            alt="pic11"
                          />
                        </Grid.Column>
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

export default Washington;
