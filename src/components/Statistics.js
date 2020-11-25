import React from "react";
import "./Country.json";
import "./Statistics.css";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      // countries: [
      //   { id: "1", country: "United States"},
      //   { id: "2", country: "Germany"},
      //   { id: "3", country: "Ireland"},
      //   { id: "4", country: "England"},
      //   { id: "5", country: "Italy"},
      //   { id: "6", country: "France"},
      //   { id: "7", country: "Spain"},
      //   { id: "8", country: "Spain"},
      //   { id: "9", country: "Ecuador"},

      // ]
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handleSubmit(event) {
  //   alert("Your destination country is: " + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    const countries = require("./Country.json");
    return (
      <div className="container">
        <h1>Popular Destinations</h1>

        <div class="dropdown">
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>
            <button id="btn">Total</button>

            <select defaultValue="">
              {countries.worldwide.map((item) => (
                <option key={item.id} value={item.country}>
                  {item.flag} {item.country}
                </option>
              ))}
            </select>

            {/* <input id="btn" type="submit" value="Submit" /> */}
          </form>
        </div>
        <div id="header">
          <h2>Cases &nbsp; Recovered &nbsp; Deaths &nbsp; </h2>
          <h3>
            55.1M &nbsp; &nbsp; &nbsp; 35.4M &nbsp; &nbsp; &nbsp; 1.33M &nbsp;
            &nbsp; &nbsp;{" "}
          </h3>
        </div>
        <div class="table-props">
          <table>
            <tr>
              <th className="location">Location</th>
              <th>Cases</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
            <tr>
              <td>🇺🇸 United States</td>
              <td>11.3M</td>
              <td>30%</td>
              <td>247k</td>
            </tr>
            <tr>
              <td>🇮🇪 Ireland</td>
              <td>11.3M</td>
              <td>30%</td>
              <td>247k</td>
            </tr>
            <tr>
              <td>🇬🇧 United Kingdom</td>
              <td>11.3M</td>
              <td>30%</td>
              <td>247k</td>
            </tr>
            <tr>
              <td>🇩🇪 Germany</td>
              <td>11.3M</td>
              <td>30%</td>
              <td>247k</td>
            </tr>
            <tr>
              <td>🇪🇸 Spain</td>
              <td>11.3M</td>
              <td>30%</td>
              <td>247k</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Statistics;
