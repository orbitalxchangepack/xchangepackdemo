import SchoolReviews from "../../SchoolReviews";
import Emoji from "../../Emoji";
import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "../../SchoolContent.css";

class Lund extends Component {
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
              <h4 className="detail_location">Sweden</h4>
              <h4 className="detail_semester">Semester 1, Semester 2</h4>
              <h1 className="title">
                Lund University – School of Economics and Management
              </h1>
              <h4 className="author">
                By Glennis Ang, Jasmine Koh, Jerrold Woo, Sherrie Teo, Shi Ying,
                Carrine (Sem 1), Xu Ling, Fu Qi (Sem 2) | faculty: NUS Business
                School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column centered>
                    <Image src={require("./Lund_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column centered>
                    <Image src={require("./Lund_pic2.jpg")} alt="pic2" />
                  </Grid.Column>
                  <Grid.Column centered>
                    <Image src={require("./Lund_pic3.jpg")} alt="pic3" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      G: Lund is a relatively small city as compared to other
                      cities (i.e Stockholm, Copenhagen), so it prides itself as
                      a University Town! this generally translates to a more
                      vibrant and youthful culture{" "}
                      <Emoji symbol="🙂" label="smiley face" /> Locals are vvv
                      friendly & v willing to help because they’re all around
                      our age haha. Since there isn’t much to do in Lund, the
                      school has many activities and CCAs to join and they’re
                      very accepting as well. You get to join a nation
                      (something like a hall/CCA) and be part of their weekly
                      activities which includes brunch events, cooking, sports,
                      clubbing etc and you only have to pay about $5-10 to join
                      these events. There are lots of CCAs to choose from as
                      well – i.e. Case Consulting Clubs, Finance, Marketing,
                      Photography, and they even have mentoring Clubs. I was in
                      one of the clubs and they were really very accepting even
                      though I only stayed for a semester while everyone else in
                      the club had a one year commitment. I would say its a fine
                      balance between a fun and study focused school.
                    </p>
                    <p className="content">
                      XL: Swedes are generally really friendly, try to learn a
                      few swedish phrases like greetings (or take the free intro
                      to swedish mod during orientation) can really make their
                      day and show your appreciation of their culture. The
                      school also has the tradition of student nations. They are
                      similar to our “colleges and halls”. Activities at the
                      nation are hosted by students for students, they include
                      pubs, bars, clubs, themed dinner etc. Students are very
                      encouraged to join a nation (out of the 13 nations),
                      exchange students are very welcomed. Though sometimes they
                      tend to speak swedish a lot, they are very friendly to
                      exchangers.{" "}
                    </p>
                    <p className="content">
                      JK: Quite relaxed overall, Swedish are known to be rather
                      cold but I personally thought they were pretty friendly.
                      There are different student nations to join for social
                      activities like clubbing, weekend buffets, similar to
                      halls in Singapore but you don’t actually stay there.
                    </p>
                    <p className="content">
                      JW: Generally the culture is quite chill, most classes
                      have a huge mix of exchangers, sometimes even more so than
                      the locals so it’s a good time to make friends from all
                      around the world! When it comes to partying and having
                      fun, Sweden can get quite expensive as alcohol is heavily
                      controlled by the government. But the school has this
                      thing called nations, which are actually run by the
                      students, and most nations have a weekly clubbing event.
                      The downside to this is you need a student card to enter
                      to all these events, so it’s really bad if you have
                      friends from other unis coming to visit you as you won’t
                      be allowed to enter.
                    </p>
                    <p className="content">
                      FQ: Swedes are really nice and friendly to interact with.
                      They would recommend good places to eat on campus. Also
                      managed to start conversations with locals at the bus stop
                      after a “Hi, wow its really cold” hahah. But we do
                      interact with exchangers more due to our modules and that
                      overseas students and exchangers are housed together.
                      There are also different nations (kinda like halls/ccas)
                      that we can join and they have a variety of activities
                      planned every week (from chill to clubbing). So theres
                      definitely something enjoyable for everyone. But if you’re
                      also looking for activities that are not organised by the
                      school (E.g. external events, concerts), I don’t think
                      theres much going on in Lund.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      G: This depends on the modules! Some of my mods do mark
                      attendance, while some is 100% assessment based.
                    </p>
                    <p className="content">
                      XL: I found learning super enjoyable in Lund Uni, the
                      professors are very knowledgeable in their own fields,
                      though their teaching styles are a little old school (some
                      are lecture styles) but class participation is very much
                      encouraged. The locals and other exchange students are
                      very proactive in asking questions and engaging in class
                      discussions. The workload is very manageable, one week
                      perhaps 2-3 classes only. Usually a group project and
                      quizes. Attendance is mandatory for intro and conclusion
                      classes. Lectures are optional while seminars are
                      compulsory.
                    </p>
                    <p className="content">
                      JK: Not many modules took attendance (2 out 4 modules I
                      took didn’t even require me to attend physically attend
                      lessons/ exams I.e. a lot of time to travel)
                    </p>
                    <p className="content">
                      JW: Generally this depends from mod to mod, but I found
                      that I could disappear from a class and the teacher
                      wouldn’t notice. Normally those that required attendance
                      are seminars which are highlighted in the timetable
                      itself. What I did to get around this was to have a friend
                      in the class to mark my attendance and this was good
                      enough.
                    </p>
                    <p className="content">
                      S/SY/C: Yes they do take attendance for certain classes
                      but some they do not. Depending if it is seminar related
                      or lecture tutorial. For seminar, they do take in account
                      attendance but for lecture tutorial not really.
                    </p>
                    <p className="content">
                      FQ: Introductory lesson, seminars and exams are mandatory
                      while the rest are optional. (If you happened to miss the
                      seminars, some profs will allow you to do a
                      penalty/make-up assignment). For the modules I took, they
                      were all lecture-tutorial style (tutorials adopt the form
                      of NUS seminar style), so its nothing too foreign to us.
                      Class participation is also pretty chill and not forceful.
                      Also, since there are students of different nationalities,
                      we do get very interesting insights and perspectives.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      G: Varies on the modules taken. Some of them are
                      completely online, some are taken like a NUS final paper
                      and some are just completely continuous assessment based.
                    </p>
                    <p className="content">
                      XL: Exams are held in exam halls, usually via laptops,
                      charging sockets are located at every table. Europe exam
                      style is – generous with time, focus on testing knowledge.
                    </p>
                    <p className="content">
                      JK: Quite flexible overall since most of them were
                      take-home exams so you can complete them even if you are
                      in the midst of travelling.
                    </p>
                    <p className="content">
                      JW: The types of exams were quite diverse, from full
                      project based, to take home assignments, to even 100%
                      assessments in an exam hall. But it was quite an
                      experience having to pitch to Sony as part of my
                      examination criteria!
                    </p>
                    <p className="content">
                      FQ: The modules I took were all continual assessments
                      consisting of Class participation, group projects and
                      presentation and final exam or essay. For the final exam
                      it depends on the module, some were take home too. I did a
                      mix of MCQs and written papers. But not to worry, they
                      were all manageable and alot of time is given too.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      Entrepreneurship, MNO, MKT3426/MKT3721, MKT3719/MKT3424,
                      BSP3001, DOS etc.
                    </h4>
                    <p className="content">
                      G: Am a Marketing student so I mapped mainly marketing
                      mods! <Emoji symbol="🙂" label="smiley face" /> But I’ve
                      friends who took entrepreneurship and MNO mods in Lund as
                      well.
                    </p>
                    <p className="content">
                      XL: I only focused on the marketing ones. I managed to map
                      the following: NUS MKT3426/MKT3721 Global Marketing ,
                      MKT3719/MKT3424 Brand Marketing. BSP3001 is also available
                      for mapping for my cohort (need to check and confirm if
                      the mod is offered subsequently since its new).
                    </p>
                    <p className="content">
                      JK: Marketing mods! E.g. International Marketing, B2B
                      Marketing, Global Marketing
                    </p>
                    <p className="content">
                      JW: I mapped 3 MNO mods and 1 DOS mod, I think Lund is a
                      school that is more for marketing majors, as my friends
                      could really cover more of their modules, I came to lund
                      and although I mapped 3 MNO mods, they were all 3761X/Y/Z
                      so really, the more generic mods just to clear the MNO
                      spec.
                    </p>
                    <p className="content">
                      S: I mapped back only marketing and MNO modules!! If you
                      are a Finance or BA student, please do not come here!!
                      However, as for Strat Management I was not able to map the
                      module although the semester after me was able to so
                      please check your module list when the school module list
                      is out.
                    </p>
                    <p className="content">
                      FQ: I took NUS modules, MKT3721 Global Marketing , MKT3719
                      Brand Marketing (was told that its delisted so will be
                      mapped to MKT3761X Topics in Marketing instead), BSP3001
                      Strategic Management and a UE. Do note that the edurec
                      mapping list consists of a lot more modules than those
                      actually offered by LUSEM.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      G: Although Lund is in Sweden, the nearest airport would
                      be Copenhagen instead of Stockholm. From school to
                      Copenhagen airport, I’d say its about a max 40mins train
                      ride? So its relatively okay! Also, flights from
                      Copenhagen to other countries in Europe are pretty
                      affordable as well. I spent an average of $60 on flights
                      (to and fro). The most expensive flight would be to
                      Iceland which costs SGD$160+ to and fro, and the cheapest
                      was going to London which costs only SGD$10 to and fro!
                    </p>
                    <p className="content">
                      XL: For travelling out of Sweden, you have to take a train
                      to Copenhagen airport. Train fare is roughly 30 SGD{" "}
                      <Emoji symbol="🙁" label="sad face" /> so just take into
                      account you have to add that cost in.
                    </p>
                    <p className="content">
                      J: Lund is located in Malmo, the third largest city in
                      Sweden. Lund itself is kinda like a self-sufficient little
                      town, there are shops, restaurants etc. but you would
                      probs get bored and wanna travel out to see more things.
                      To get to central Malmo, convenient to take either the
                      train or bus. Nearest airport to Lund would be Copenhagen
                      Airport, Denmark (more for international flights,
                      convenient to get there, around 30-40 mins by train from
                      Lund central station) or Malmo Airport (more for flights
                      around Europe, convenient to get there, around 30-40 mins
                      by a special bus from Lund central station).
                    </p>
                    <p className="content">
                      S/SY/C: Lund is actually a small town super far south of
                      Sweden so it’s actually the less colder parts of Sweden!!
                      And one good thing is that it’s an hour train/bus ride
                      away away from Copen Airport so it’s easy to travel around
                      as well :’) The school is actually a half an hour walk
                      away from main Lund Station but it’s a 10 min bus ride
                      away from the hostel which I stay!! If you are a student
                      in Biz, I would highly recommend staying in Sofieburg
                      because the school is just a 3 min walk away from the
                      hostel and there’s a supermarket 3 mins walk away as well
                      <Emoji symbol="🙂" label="smiley face" />
                    </p>
                    <p className="content">
                      FQ: Lund is a really small town so its really easy to go
                      around. I cant cycle so I bought monthly student bus
                      passes and they were cheaper than SG concession passes.
                      The bus timings are really accurate and you are able to
                      see the entire week’s schedule ahead of time through the
                      app. When possible, do travel in twos or more as there are
                      discounts. Please also do not fare dodge, the fine is
                      about SGD150. I also had friends who went around by feet.
                      Lund is closer to CPH airport than Stockholm so we usually
                      travel in and out by taking a train from Lund Central to
                      CPH airport. The travel journey is about 45 mins and
                      you’ll have to purchase tickets through the same app for
                      buses. Downside: Extra cost for travelling due to train
                      ticket fare.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Getting Around</h2>
                    <p className="content">
                      G: Lund is not thaaaat big so our main mode of transport
                      is either cycling or walking! As my hostel is only a 5
                      mins walk from school, I didn’t invest in a bike and
                      walked mainly. Friends who stayed further away from the
                      school rented 2nd hand bikes or took the bus. If I
                      remember correctly, there’s concession for public
                      transport too so I think its fine!
                    </p>
                    <p className="content">
                      XL: Lund is very connected with trains and buses. Download
                      the transport app (skanetrafiken) to make in-app ticket
                      purchase instantly. There is a student fare and group
                      discounts too! So bring more friends for travels{" "}
                      <Emoji symbol="🙂" label="smiley face" />
                    </p>
                    <p className="content">
                      JW: You can walk all around Lund cause it’s literally the
                      size of like Changi, I believe that there are some
                      packages available but for a short term stay it may not be
                      worth it.
                    </p>
                    <p className="content">
                      S/SY/C: Public transport is generally more expensive than
                      SG!! However, you can use the Skånetrafiken app to buy
                      your bus and train tickets! One good thing is that it has
                      cheaper fares for groups of 3 or more so it’s good if you
                      travel in a group!! Tbh student fare is same as adult fare
                      so <Emoji symbol="🙃" label="upside down smiley face" />{" "}
                      Alternatives are probably taxis which are SUPA expensive
                      in Sweden and biking!!! You can rent a bike as well but m
                      not too sure about the bike prices. For bikes, it’s
                      important to note that cause Lund is pretty hilly, you
                      kind to have to know that it can be pretty tiring and it’s
                      could be super cold in the winters :’) Bus rides are
                      usually arnd $3sgd per trip and they are rather
                      convenient! They come quite often too so its easy to get
                      around.
                    </p>
                    <p className="content">
                      FQ: Eating out is pretty expensive (more than $10 per meal
                      even for just burger and fries) Groceries are affordable,
                      so most of us cook our own meals. They are asian markets
                      around, so don’t have to worry about bringing sauces,
                      pastes and noodles over.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Cost of Living</h2>
                    <p className="content">
                      G: Hmm I think 1 good thing about choosing Lund is that
                      you’re assured you have 10-11 more NUS students going to
                      the same school as you and if you guys stay together, you
                      can share groceries spending and this makes it a lot more
                      affordable! We mainly bought groceries instead of eating
                      out. But honestly, Lund is a lot cheaper compared to
                      Stockholm and Copenhagen (if you’re considering the nordic
                      areas) because the COL is catered mainly to students.
                      Eating out is defo expensive.. i.e eating at a cafe that
                      sells burgers and fries can cost about SGD$15? ok hmm its
                      basically normal cafe price in Singapore as well haha. But
                      if you compare to other countries like Prague/Budapest,
                      its defo more expensive.
                    </p>
                    <p className="content">
                      XL: Generally affordable for grocery, better if you cook
                      meals with friends and split the cost! Eating out can be
                      around $7-20, depending on whether its kebab by the street
                      or cozy restaurants. Be sure to splurge on the desserts,
                      cos they are the bombs!!
                    </p>
                    <p className="content">
                      JK: Eating out is expensive (at least S$10 per meal)
                      Groceries can be very cheap (select sales items, go to
                      cheaper supermarkets like Lidl and ICA).
                    </p>
                    <p className="content">
                      JW: It’s not cheap to stay in Sweden, so don’t expect to
                      be eating out everyday unless you’re loaded…plus I think
                      you’ll get sick of eating burgers and falafels everyday if
                      you did that. Groceries can be cheap because of economies
                      of scale due to the sheer number of NUS kids that go
                      there, but overall if you’re looking for a cheap exchange,
                      the cheapest thing about Lund is the airfares out to
                      various European cities via Ryanair.
                    </p>
                    <p className="content">
                      S/SY/C: Groceries are around $4/meal but we go to the
                      supermarket almost every other day. I would say every week
                      is about ~ $35-50 I mostly cooked together with my
                      housemates thus the cost of groceries were shared among
                      us, and it was quite affordable but groceries are mostly a
                      bit more expensive than SG. It is good if you can find a
                      few more friends to share the cost with, because like can
                      share costs for condiments, and buy in bulk etc! There’s a
                      few Asian marts in the city centre that sells very nice
                      and affordable asian groceries so don’t worry too much
                      about missing asian food! Would recommend cooking most of
                      your meals as eating out can be quite expensive! and some
                      restaurants there don’t rly like the idea of sharing, so
                      they expect each person to order a main~
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">Accomodation Choices</h2>

                    <p className="content">
                      G: They have lots of hostels and I think everyone in my
                      batch who went to Lund stayed in a hostel! You can choose
                      to stay alone, or with a roomie. I stayed in Sofieberg
                      with 6 other friends and it was only a 5 min walk from
                      school so we only had to leave our apartment 5 mins before
                      class starts. Would totally recommend this place because
                      it was only 2 years old when we stayed there so the
                      facilities are rly new!! Also, on days when its raining or
                      if the weather gets super bad and you don’t wanna leave
                      your room (esp winter season), you can just run to school
                      from your apartment haha – that was what most of us did in
                      December and it helps a lot. Also, there’s a supermarket
                      and gym near the school (which again, is near our
                      apartment) so it makes things a lot easier for us as well!
                    </p>
                    <p className="content">
                      XL: The uni is very accessible, mainly depending on where
                      your accommodation is. I highly recommend Sofieberg which
                      is just opposite the school (literally cross a road). The
                      accoms is very new, clean and comfortable. ICA (their
                      local supermarket) is right beside the school as well so
                      its very convenient for grocery shopping. Bikes are
                      available at the rental shops at affordable prices. Lund
                      is a very bike friendly city, literally everyone is on
                      bikes there. So if you are a morning person who doesnt
                      mind sweating a little for a 815am class, you can consider
                      choosing a cheaper accomms which is further away. For
                      accoms, you will also have the choice of choosing a
                      roomate or leaving it to fate. Slots for rooming together
                      are in high demand and can run out fast, so be sure to
                      submit the application form right when the portal open.
                      Rentals are paid via the portal every month.
                    </p>
                    <p className="content">
                      JK: All NUS Business students stayed in the school
                      compound, mainly at 2 different student hostels
                      (Klostergarden and Sofieberg) Klostergarden was very
                      affordable but much father from the business school in
                      Lund whereas Sofieberg was literally a stone’s throw away
                      from the business school and much newer but rental was 2-3
                      times that of Klostergarden. There were other NTU and SMU
                      students who unfortunately did not secure school
                      accommodation and had to resort to Airbnbs, which were
                      definitely pricier.
                    </p>
                    <p className="content">
                      JW: I stayed in Sofieberg, and I highly recommend this
                      place to stay if you are a business student! It’s just
                      across the road from school, which is perfect for the
                      winter. It’s also directly above the Lund accoms office,
                      so on your first day there, when you collect your keys,
                      you’ll never get lost to your apartment because it’s
                      literally right there.
                    </p>
                    <p className="content">
                      FQ: There are alot of accommodation types to choose from.
                      Ive seen various accommodations and they were all quite
                      spacious. I stayed at Eddan and the layout was like a 4/5
                      room HDB flat where there were a common kitchen area and 4
                      rooms, each with their own toilet and shower. Thus, I had
                      the opportunity to interact and live with 3 other students
                      from India, Lebanon and New Zealand. Eddan is located in a
                      quiet neighbourhood and near a park. So the view is really
                      nice and if you stay on the higher floors you may catch
                      the sunset too. It is about a 15 mins bus ride from LUSEM
                      and on the way to school. You will get to pass by some
                      horses too! It will take around 25 minutes to get to the
                      central.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid divided="vertically" Columns={4}>
                  <Grid.Row columns={4}>
                    <Grid.Column>
                      <Image src={require("./Lund_pic4.jpg")} alt="pic4" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={require("./Lund_pic5.jpg")} alt="pic5" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={require("./Lund_pic6.jpg")} alt="pic6" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={require("./Lund_pic7.jpg")} alt="pic7" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Lund;
