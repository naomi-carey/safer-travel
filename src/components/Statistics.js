import React from "react";
import { FaCreativeCommonsPd } from "react-icons/fa";
import "./Country.json";
import "./Statistics.css";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCovidStats: [],
      selectedCountry: {},
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
      changeCases: countryInfo[0].increment,
      // deathCases: countryInfo[0].deaths,
    });
  };
  componentDidMount() {
    let incrementArray = [];
    let myHistoricalData = [];
    let firstdata = [];
    let increment = "";
    let myFinalData = [];

    const apiCall = () => {
      Promise.all([
        fetch("https://corona.lmao.ninja/v2/countries?sort=countries"),
        fetch("https://disease.sh/v3/covid-19/historical?/"),
      ])
        .then(([response1, response2]) => {
          return Promise.all([response1.json(), response2.json()]);
        })

        .then(([response1, response2]) => {
          firstdata = response1;
          myHistoricalData = response2;

          /*calculate that shit*/
          myHistoricalData.map((country) => {
            increment =
              ((country.timeline.cases[
                Object.keys(country.timeline.cases)[
                  Object.keys(country.timeline.cases).length - 1
                ]
              ] -
                country.timeline.cases[
                  Object.keys(country.timeline.cases)[
                    Object.keys(country.timeline.cases).length - 8
                  ]
                ]) /
                (country.timeline.cases[
                  Object.keys(country.timeline.cases)[
                    Object.keys(country.timeline.cases).length - 8
                  ]
                ] -
                  country.timeline.cases[
                    Object.keys(country.timeline.cases)[
                      Object.keys(country.timeline.cases).length - 15
                    ]
                  ])) *
              100;
            incrementArray.push({
              name: country.country,
              increment: increment,
            });
          });

          firstdata.map((first) => {
            incrementArray.map((second) => {
              first.country.toLowerCase() === second.name.toLowerCase() &&
                myFinalData.push({
                  country: first.country,
                  active: first.active,
                  cases: first.cases,
                  increment: second.increment,
                });
            });
          });

          // console.log(myFinalData);

          this.setState({
            countryCovidStats: myFinalData,
          });
          console.log(this.state.countryCovidStats[0].increment);
        });
    };
    apiCall();
  }

  render() {
    const countries = require("./Country.json");
    return (
      <div className="container">
        <h1>Popular Destinations</h1>
        <div className="statistics-info">
          <div className="dropdown">
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
              <h2>Increment/Decrement</h2>
              {this.state.changeCases && (
                <div className="increment-main">
                  <h3>
                    {this.state.changeCases.toString() === "NaN" ||
                    this.state.changeCases === Infinity
                      ? "not available"
                      : Math.round(this.state.changeCases)}
                  </h3>

                  <div>
                    <div
                      className={
                        this.state.changeCases.toString() === "NaN" ||
                        this.state.changeCases === Infinity
                          ? "indicator indicator-grey"
                          : this.state.changeCases < 80
                          ? "indicator indicator-green"
                          : this.state.changeCases > 120
                          ? "indicator indicator-red"
                          : "indicator indicator-yellow"
                      }
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div class="table-props">
          <table>
            <tr>
              <th className="location">Location</th>
              <th>Cases</th>
              <th>Active</th>
              <th>Increment</th>
            </tr>
            {this.state.countryCovidStats.map((countryData) => (
              <tr>
                <td>{countryData.country}</td>
                <td>{countryData.cases}</td>
                <td>{countryData.active}</td>
                <td className="incrementContainer">
                  <div className="increment-data">
                    {countryData.increment.toString() === "NaN" ||
                    countryData.increment === Infinity
                      ? "not available"
                      : Math.round(countryData.increment)}
                  </div>
                  <div className="indicator-container">
                    <div
                      className={
                        countryData.increment.toString() === "NaN" ||
                        countryData.increment === Infinity
                          ? "indicator indicator-grey"
                          : countryData.increment < 80
                          ? "indicator indicator-green"
                          : countryData.increment > 120
                          ? "indicator indicator-red"
                          : "indicator indicator-yellow"
                      }
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Statistics;
