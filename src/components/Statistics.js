import React from "react";
import "./Country.json";
import "./Statistics.css";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCountry: false,
      countryCovidStats: {},
      selectedCountry: {},
      todayCases: "",
      activeCases: "",
      deathCases: "",
    };
  }
  showCountryStats = (event) => {
    let selectedCountry = event.target.value;
    let countryInfo = this.state.countryCovidStats.filter(
      (country) => country.country === selectedCountry
    );
    this.setState({
      todayCases: countryInfo[0].cases,
      activeCases: countryInfo[0].active,
      deathCases: countryInfo[0].deaths,
    });

    // this.setState({ selectedCountry: countryInfo[0] });
    // this.setState({ numberCases: countryInfo });
    // this.setState({ recoveredCases: countryInfo[0] });
    // this.setState({ deathCases: countryInfo[0] });
  };

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/countries?sort=countries")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          countryCovidStats: data,
        })
      );
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert("Your destination country is: " + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    const countries = require("./Country.json");
    return (
      <div className="container">
        <h1>Popular Destinations</h1>
        <div className="statistics-info">
          <div class="dropdown">
            {/* <form onSubmit={this.handleSubmit}> */}

            <form>
              <select onChange={this.showCountryStats} defaultValue="">
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
            <div className="active-deaths">
              <h2>Today </h2>
              {this.state.todayCases && (
                <div>
                  <h3>{this.state.todayCases}</h3>
                </div>
              )}
            </div>
            <div className="numbers">
              <h2>Active </h2>
              {this.state.activeCases && (
                <div>
                  <h3>{this.state.activeCases}</h3>
                </div>
              )}
            </div>
            <div className="numbers">
              <h2>Safe </h2>
              <h3>GREEN</h3>
            </div>
          </div>
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
