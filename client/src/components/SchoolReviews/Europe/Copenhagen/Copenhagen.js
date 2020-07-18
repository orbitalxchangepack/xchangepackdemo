import SchoolReviews from "../../SchoolReviews";
import React, { Component } from "react";
import { Grid, Container, Image, Table, Label } from "semantic-ui-react";
import "../../SchoolContent.css";

class Copenhagen extends Component {
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
              <h1 className="title">Copenhagen Business School</h1>
              <h4 className="author">
                authors: Ryan Teo, Clemon Ho, Qian Hui | faculty: NUS Business
                School
              </h4>
              <h1 className="spacer">{""}</h1>
              <Grid divided="vertically">
                <Grid.Row columns={4}>
                  <Grid.Column width={3}></Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./Copenhagen_pic1.jpg")} alt="pic1" />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./Copenhagen_pic2.jpg")} alt="pic2" />
                  </Grid.Column>
                  <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_center">School Culture</h2>
                    <p className="content">
                      R: Danish people drink and party a lot, and while
                      friendly, they are not exactly inclusive. I was lucky to
                      have a very friendly and welcoming buddy. Don’t expect to
                      assimilate into the Danish culture or make tons of Danish
                      friends, you most likely won’t.
                    </p>
                    <p className="content">
                      C: Anyway, you would/should be traveling around.
                    </p>
                    <p className="content">
                      QH: Denmark is the 2nd happiest country in the world by
                      2017 World Happiness Report so it is generally nice and
                      easy to ease into the school with many friendly staffs and
                      students. A balanced work/leisure time is very important
                      to Danes, evident from how they ’hygge’, balance welfare,
                      environment, trust and freedom all factors that make them
                      happy in school. Locals are generally quite friendly and
                      helpful. There is rarely any communication barrier as the
                      general population speaks English. CBS has many student
                      clubs, excursion activities and sports activities from
                      beginner’s to advanced level so you get the opportunity to
                      learn new skills and socialise with international
                      students. There is also a paid orientation where you get
                      to learn about the rich Danish culture through movies and
                      leisure activities.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Attendance Levels</h2>
                    <p className="content">
                      QH: No attendance taking, you are only accessed at the
                      exam. Grade is neither affected by attendance nor how
                      active you are during class (So for students who want to
                      skip school to travel, CBS is perfect!).
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Exam Policies</h2>
                    <p className="content">
                      R: Depends on module, mostly take home assignments. I had
                      one physical exam that was done in the computer lab.
                    </p>
                    <p className="content">
                      QH: Written exams
                      <li className="content">
                        Projects: where you work with a theoretical problem
                        statement or a case based on practice – either
                        individually or in groups
                      </li>
                      <li className="content">
                        Shorter written exams: where you are given an assignment
                        you have to answer within a limited time period e.g. 24,
                        48 or 72 hour exam assignments.
                      </li>
                      <li className="content">
                        Sit-in exams: where you meet up at CBS and do a written
                        exam typically in 4 hours – with or without exam aids.
                      </li>
                      Oral exams
                      <li className="content">
                        A presentation of a given topic{" "}
                      </li>
                      <li className="content">
                        A syllabus exam where you will draw a question or topic{" "}
                      </li>
                      <li className="content">
                        Oral defence of a written paper
                      </li>
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">Modules offered</h2>
                    <h4 className="subsubtitle_center">
                      FIN 3701, two FIN Electives, BSP 3701 Strategic Management
                      etc.
                    </h4>
                    <p className="content">
                      QH: Took 5 courses worth 37.5 ECTs at CBS which is an
                      equivalent to 24MCs in NUS (7.5 ECTs in CBS = 4MCs in NUS)
                      <li className="content">
                        An extra 5th NUS module (worth 4 MCs) will be credited
                        for every Four (4) 7.5 ECTS courses taken at the above
                        partner universities.
                      </li>
                      <li className="content">
                        The 5th NUS module will be a “Business Module with the
                        code BXT3041”. You may use this module BXT3041 (worth 4
                        MCs) to fulfill your Unrestricted Elective module
                        requirement in your degree program.
                      </li>
                      <li className="content">
                        Please note that the 5th module will only be credited if
                        you have passed all the four (4) 7.5 ECTS courses at the
                        partner university. If you take three (3) 7.5 ECTS
                        courses and one(1) 5.0 ECTS course at the partner
                        university, the 5th module will NOT be credited (ie,
                        only 16 MCs will be transferred back to NUS). If you
                        only passed 3 courses, then only 12 MCs will be
                        transferred back to NUS.
                      </li>
                    </p>
                    <p className="content">
                      Exam grading system: Follows a 7-point grading scale (no
                      bell curve). Scores range from -3 , 0, 2 (Grade E), 4
                      (Grade D), 7 (Grade C), 10 (Grade B), 12 (Grade A). Best
                      thing? 02 is the minimum grade for passing an exam!
                    </p>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell></Table.HeaderCell>
                          <Table.HeaderCell>CBS Module</Table.HeaderCell>
                          <Table.HeaderCell>NUS Equivalent</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Label ribbon>Choice 1</Label>
                          </Table.Cell>
                          <Table.Cell>
                            BA-BDMAO2002U Corporate Finance
                          </Table.Cell>
                          <Table.Cell>FIN3101 Corporate Finance</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Label ribbon>Choice 2</Label>
                          </Table.Cell>
                          <Table.Cell>
                            BA-BHAAV2389U Behavioural Finance
                          </Table.Cell>
                          <Table.Cell>
                            FIN3120X Topic in Finance: Behavioural Finance
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Label ribbon>Choice 3</Label>
                          </Table.Cell>
                          <Table.Cell>BA-BISHO2002U Risk Management</Table.Cell>
                          <Table.Cell>
                            FIN3714 Financial Risk Management
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Label ribbon>Choice 4</Label>
                          </Table.Cell>
                          <Table.Cell>
                            BA-BHAAC2262U Entrepreneurial Finance
                          </Table.Cell>
                          <Table.Cell>
                            FIN3120X Topic in Finance: Entrepreneurial Finance
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Label ribbon>Choice 5</Label>
                          </Table.Cell>
                          <Table.Cell>
                            BA-BHAAV1366U Strategic Management
                          </Table.Cell>
                          <Table.Cell>BSP3701 Strategic Management</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column width={3}>
                    <Image src={require("./Copenhagen_pic4.jpg")} alt="pic4" />
                    <Image src={require("./Copenhagen_pic5.jpg")} alt="pic5" />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h2 className="subtitle_center">Location</h2>
                    <p className="content">
                      R: Copenhagen is very small (smaller than Singapore by
                      quite a bit) so getting from one place to another is
                      really easy.
                    </p>
                    <p className="content">
                      C: The school is like SMU in the sense that its campus is
                      spread out. Each section of the school is near to an MRT
                      station. There is direct train to the airport.
                    </p>
                    <p className="content">
                      QH: The CBS campus is located in a very prime and central
                      region known as the Frederiksberg. We have lectures and
                      tutorials held at 4 different primary buildings being:
                      <ol>
                        <li>
                          <b>Solbjerg Plads:</b> Main campus building with a
                          wide range of auditoriums, class rooms, group study
                          rooms, the academic bookstore as well as home to the
                          largest of the CBS Libraries.
                        </li>
                        <li>
                          <b>Kilen:</b> A few steps from Solbjerg Plads you find
                          Kilen with teaching facilities and home to the
                          President’s office and top management at CBS.
                        </li>
                        <li>
                          <b>Dalgas Have:</b> Architectured building with class
                          rooms, study rooms and library.
                        </li>
                        <li>
                          <b>Porcelænshaven:</b> Former porcelain factory now
                          housing the administrative location of the
                          International Office as well as teaching and research
                          facilities.
                        </li>
                      </ol>
                      The school is close to the centre of Copenhagen so it is
                      easily accessible from your hostels. Moreover, Copenhagen
                      Airport is only a short distance from the city center by
                      metro or train (25mins). From there you can fly to and
                      from destinations within Denmark and around the world.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={require("./Copenhagen_pic3.jpg")} alt="pic3" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Getting Around</h2>
                    <p className="content">
                      R: Public transport is expensive as hell. You should cycle
                      where possible. Rent a bike from Swapfiets and try
                      navigating around, it’s pretty fun and all the Danes do
                      that anyway.
                    </p>
                    <p className="content">
                      C: You can buy a monthly pass but you will be travelling
                      quite often so you probably won’t need it.
                    </p>
                    <p className="content">
                      QH: Travelling around Copenhagen is easy by public
                      transportation as it is relatively small city. Public
                      transportation is reliable, efficient and can take you
                      everywhere. In a big city like Copenhagen there are good
                      reliable options for transportation such as bus, metros
                      and local trains. However, public transport is extremely
                      expensive as there is no student fare. An average 10mins
                      bus/train ride cost around SGD 3.50. Hence, investing in a
                      second-hand bike for your stay here might be the most
                      viable option. Most of us rented a bike during our stay
                      there (rental is at SGD$20~ per month) as there is a
                      strong cycling culture in Copenhagen. There are about
                      400km of cycle paths and more than 1/3 the capital’s
                      population commute to work by bicycle. However, if you are
                      not an experienced cyclist and do not feel confident on a
                      bike, you should not make your first attempt in the
                      fast-paced traffic of Copenhagen. Many Danes ride very
                      fast and you are advised to practice first.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2 className="subtitle_left">Cost of Living</h2>
                    <p className="content">
                      R: If you want to save money this is the wrong place to
                      have an exchange. Everything OBSCENELY expensive here.
                      McChicken meal? Sorry that would be $13. Cafe meal? $20
                      and above. You could technically save by buying kebabs and
                      cooking whenever possible, that was what I did.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column rows={2} width={10}>
                    <Grid>
                      <h2 className="subtitle_center">Accomodation Choices</h2>
                      <p className="content">
                        R: You can stay near campus (school-designated
                        accomodation) or rent your own housing; I would say
                        expect to pay at least S$900 a month minimum if you want
                        to be near school (average is about $1.1k even for a
                        tiny apartment.
                      </p>
                      <p className="content">
                        C: For us, we spent around S$800/person/month. It was a
                        shitty apartment but cheap for Copenhagen standards.
                        Would advocate staying in school for roughly 900/month
                        at least you will have proper facilities and have a
                        chance to meet new friends.
                      </p>
                      <p className="content">
                        QH: The CBS Housing Department has access to seven
                        student residence halls, and priority is given to
                        international exchange students, who are in Copenhagen
                        for a short period. I stayed in one of the CBS housing
                        apartment, Svanevej 4 which was located slightly further
                        away from the school campus (20mins train/bus). There
                        are a good mix of international students at most of the
                        hostels in CBS so I recommend staying in these hostels
                        to meet international friends! More information about
                        the services of the CBS Housing Department, the various
                        housing options, and allocation process (deadlines,
                        payment procedure, online application system, etc.) can
                        be found at the website of the CBS Housing Department.
                        Paid around $700+/month(Double room).
                      </p>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Image
                            src={require("./Copenhagen_pic7.jpg")}
                            alt="pic7"
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <Image
                            src={require("./Copenhagen_pic8.jpg")}
                            alt="pic8"
                          />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Image src={require("./Copenhagen_pic6.jpg")} alt="pic6" />
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

export default Copenhagen;
