import React from "react";
import ReactDOM from "react-dom";

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
            <h2 className="subtitle_center">Select PU from dropdown list</h2>

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
              <div key={School.id} style={{ margin: "10px" }}>
                {School.NUS_Module_Code}
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
