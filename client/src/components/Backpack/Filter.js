import React from "react";
import ReactDOM from "react-dom";
import { Table, Label } from "semantic-ui-react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      School: "",
    };

    this.handleSubmitSchool = this.handleSubmitSchool.bind(this);
  }

  handleSubmitSchool(event) {
    alert("Your selected value is: " + this.state.School);
    event.preventDefault();
  }

  handleChangeSchool = (event) => {
    this.setState({ School: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  }

  componentDidMount() {
    const schools = require("../dataraw/json/Backpack_raw.json");
    this.setState({ schools: schools });
  }

  render() {
    const uniqueSchool = this.getUnique(this.state.schools, "School");

    const schools = this.state.schools;
    const School = this.state.School;

    const filterDropdown = schools.filter(function (result) {
      return result.School === School;
    });

    return (
      <div>
        <form onSubmit={this.handleSubmitSchool}>
          <br />
          <br />
          <label>
            <select
              value={this.state.School}
              onChange={this.handleChangeSchool}
            >
              {uniqueSchool.map((School) => (
                <option key={School.School_ID} value={School.School}>
                  {School.School}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
          <div>
            {filterDropdown.map((School) => (
              <div key={School.School} style={{ margin: "10px" }}>
                <Table celled>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>School Code</Label>
                      </Table.Cell>
                      <Table.Cell>{School.School_Code}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>Location</Label>
                      </Table.Cell>
                      <Table.Cell>{School.Continent}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>Semester Details</Label>
                      </Table.Cell>
                      <Table.Cell>{School.Semester_Details}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>NUS Pre-approved Modules</Label>
                      </Table.Cell>
                      <Table.Cell>{School.NUS_Module_Code} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>School Site</Label>
                      </Table.Cell>
                      <Table.Cell>{School.School_Site} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>School Review?</Label>
                      </Table.Cell>
                      <Table.Cell>{School.School_Review} </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <br />
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}
export default Filter;

ReactDOM.render(<Filter />, document.querySelector("#root"));
