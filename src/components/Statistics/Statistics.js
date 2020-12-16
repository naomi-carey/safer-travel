import React from "react";
// import { FaCreativeCommonsPd } from "react-icons/fa";
import "./Country.json";
import "./Statistics.css";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCovidStats: this.props.countryCovidStats,
      selectedCountry: {},
      showDetailedStats: false,
    };
  }

  showCountryStats = (event) => {
    let selectedCountry = event.target.value;
    let countryInfo = this.state.countryCovidStats.filter(
      (country) => country.country === selectedCountry
    );

    this.props.getChangeCases(countryInfo[0].increment);
    /*TRICK FOR BIG COUNTRIES*/
    /*REMOVING NAN AND INFINITY*/
    let actualCountryInfo = countryInfo
      .filter((e) => e.increment.toString() !== "NaN")
      .filter((e) => e.increment !== Infinity);
    /*INITIALIZING INCREMENT. ADDING INCREMENT WITH MAP*/
    let increment = 0;
    actualCountryInfo.map((e) => (increment = increment + e.increment));
    /*DIVIDING INCREMENT TO DO THE AVAREGE*/
    increment = increment / actualCountryInfo.length;

    this.setState({
      todayCases: countryInfo[0].cases,
      activeCases: countryInfo[0].active,
      changeCases: increment,
      showDetailedStats: false,
    });
  };

  getDetailedStats = () =>
    this.setState({ showDetailedStats: !this.state.showDetailedStats });

  render() {
    const countries = require("./Country.json");
    return (
      <div className="container">
        <h1>COVID Country Statistics</h1>
        <h3>Get the latest COVID updates before booking your trip!</h3>

        <div className="statistics-info">
          <div className="stats-dropdown">
            <button className="total-btn" onClick={this.getDetailedStats}>
              {this.state.showDetailedStats ? true : false}
              World Wide
            </button>

            <form>
              <select
                className="country-select2"
                onChange={this.showCountryStats}
                defaultValue=""
              >
                {countries.worldwide.map((item) => (
                  <option key={item.id} value={item.country}>
                    {/* World Wide */}
                    {item.flag} {item.country}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="stats-header">
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
                      : `${Math.round(this.state.changeCases)} %`}
                  </h3>

                  <div>
                    <div
                      className={
                        this.state.changeCases.toString() === "NaN" ||
                        this.state.changeCases === Infinity
                          ? "indicator indicator-grey"
                          : this.state.changeCases < 60
                          ? "arrow-green bounce-up-down"
                          : this.state.changeCases > 90
                          ? "arrow-red bounce-up-down"
                          : "arrow-yellow bounceRight"
                      }
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {this.state.showDetailedStats && (
          <div class="table-props">
            <table>
              <tr>
                <th className="location">Location</th>
                <th>Province</th>
                <th>Cases</th>
                <th>Active</th>
                <th>Increment</th>
              </tr>
              {this.state.countryCovidStats.map((countryData) => (
                <tr>
                  <td>{countryData.country}</td>
                  <td>{countryData.province}</td>
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
                            : countryData.increment <= 55
                            ? "indicator indicator-green"
                            : countryData.increment > 90
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
        )}
      </div>
    );
  }
}

export default Statistics;
