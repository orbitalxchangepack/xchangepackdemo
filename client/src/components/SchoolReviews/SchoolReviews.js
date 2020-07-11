import React, { Component } from "react";
import { Nav, Dropdown, Sidenav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";

class SchoolReviews extends Component {
  render() {
    return (
      <div style={{ width: 250, position: "relative" }}>
        <Sidenav style={{ height: 700 }} defaultOpenKeys={[]} activeKey="1">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="book" />}>
                Resources
              </Nav.Item>
              <Dropdown
                eventKey="2"
                title="United States"
                icon={<Icon icon="globe" />}
              >
                <Dropdown.Item eventKey="2-1">
                  <Link to="/SchoolReviews/UMich">
                    University of Michigan, Ann Arbor
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-2">
                  University of Southern California
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
              </Dropdown>
              <Dropdown eventKey="4" title="Asia" icon={<Icon icon="globe" />}>
                <Dropdown.Item eventKey="4-1">sch1</Dropdown.Item>
              </Dropdown>
              <Dropdown eventKey="5" title="More" icon={<Icon icon="globe" />}>
                <Dropdown.Item eventKey="5-1">sch1</Dropdown.Item>
                <Dropdown.Menu eventKey="5-5" title="Custom Action">
                  <Dropdown.Item eventKey="5-5-1">Action Name</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}

export default SchoolReviews;
