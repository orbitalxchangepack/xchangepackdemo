import React, { Component } from "react";
import { Nav, Dropdown, Sidenav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import "./SchoolReviews.css";

class SchoolReviews extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <Sidenav style={{ height: "100%" }} defaultOpenKeys={[]} activeKey="1">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="book" />}>
                <Link to="/SchoolReviews">Resources</Link>
              </Nav.Item>
              <Dropdown
                eventKey="2"
                title="United States"
                icon={<Icon icon="globe" />}
              >
                <Dropdown.Item eventKey="2-1">
                  <Link to="/SchoolReviews/NYU">New York University</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-2">
                  <Link to="/SchoolReviews/UMich">
                    University of Michigan, Ann Arbor
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-3">
                  <Link to="/SchoolReviews/SouthernCalifornia">
                    University of Southern California
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-4">
                  <Link to="/SchoolReviews/Washington">
                    University of Washington
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-5">
                  <Link to="/SchoolReviews/UTAustin">UT Austin (Texas)</Link>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="3"
                title="Europe"
                icon={<Icon icon="globe" />}
              >
                <Dropdown.Item eventKey="3-1">
                  <Link to="/SchoolReviews/Aarhus">
                    Aarhus School of Business
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-2">
                  <Link to="/SchoolReviews/Copenhagen">
                    Copenhagen Business School
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-3">
                  <Link to="/SchoolReviews/Lund">
                    Lund Univesity - School of Economics and Management
                  </Link>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown eventKey="4" title="Asia" icon={<Icon icon="globe" />}>
                <Dropdown.Menu eventKey="4-1" title="South Korea">
                  <Dropdown.Item eventKey="4-1-1">
                    <Link to="/SchoolReviews/Korea">Korea University</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                eventKey="5"
                title="Canada"
                icon={<Icon icon="globe" />}
              >
                <Dropdown.Item eventKey="5-1">
                  <Link to="/SchoolReviews/HECMontreal">HEC Montreal</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="5-2">
                  <Link to="/SchoolReviews/Queens">Queens University</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="5-3">
                  <Link to="/SchoolReviews/York">York University</Link>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="6"
                title="Australia"
                icon={<Icon icon="globe" />}
              >
                <Dropdown.Item eventKey="6-1">
                  <Link to="/SchoolReviews/Monash">Monash University</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-2">
                  <Link to="/SchoolReviews/UNSWSydney">
                    University of New South Wales (UNSW Sydney)
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-3">
                  <Link to="/SchoolReviews/Sydney">University of Sydney</Link>
                </Dropdown.Item>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}

export default SchoolReviews;
