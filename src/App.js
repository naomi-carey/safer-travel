import React, { Component } from "react";
import Map from "./components/Map/Map";
import Statistics from "./components/Statistics/Statistics";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer_one";
import AttractionsCard from "./components/TravelCards/AttractionsCard";
import FlightCard from "./components/Flights/FlightCard";
import Airport from "./components/Airport/Airport";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { airports } from "./components/Airport/AirportMap";
import moment from "moment";
import Subscription from "./components/Subscription/Subscription";
import AttractionsHomePage from "./components/AttractionsHomePage/AttractionsHomePage";

import AboutUs from "./components/AboutUs/AboutUs";

import TravelPoster from "./components/TravelPoster/TravelPoster";
import TravelBanner from "./components/Banners/TravelBanner";
import StatisticsBanner from "./components/Banners/StatisticsBanner";

// import Loading from "./components/LoadingScreen/Loading";
// import FlightBooking from './components/FlightBooking/FlightBooking';

import Loading from "./components/LoadingScreen/Loading";

import FlightBooking from "./components/FlightBooking/FlightBooking";
import CollabBanner from "./components/CollaborationBanner/ColabBanner";

export default class App extends Component {
  state = {
    flightData: {},
    cityFrom: {},
    cityTo: {},
    startDate: null,
    finalStartDate: "",
    endDate: null,
    finalEndDate: "",
    airportsAndCities: airports,
    showTicket: false,
    stabilityStat: "",
    countryCovidStats: [],
    showStatistics: false,
    showHome: true,
    showTravel: false,
    showAttractions: false,
    showMap: true,
    showAboutUs: false,
  };

  componentDidMount() {
    fetch(
      "https://api.skypicker.com/flights?flyFrom=PRG&to=STN&dateFrom=18/12/2020&dateTo=28/12/2020&partner=picky&v=3"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          flightData: data,
        })
      );
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
          myHistoricalData.map((country) => {
            increment =
              ((country.timeline.cases[
                Object.keys(country.timeline.cases)[
                  Object.keys(country.timeline.cases).length - 1
                ]
              ] -
                country.timeline.cases[
                  Object.keys(country.timeline.cases)[
                    Object.keys(country.timeline.cases).length - 4
                  ]
                ]) /
                (country.timeline.cases[
                  Object.keys(country.timeline.cases)[
                    Object.keys(country.timeline.cases).length - 15
                  ]
                ] -
                  country.timeline.cases[
                    Object.keys(country.timeline.cases)[
                      Object.keys(country.timeline.cases).length - 18
                    ]
                  ])) *
                50 +
              ((country.timeline.cases[
                Object.keys(country.timeline.cases)[
                  Object.keys(country.timeline.cases).length - 6
                ]
              ] -
                country.timeline.cases[
                  Object.keys(country.timeline.cases)[
                    Object.keys(country.timeline.cases).length - 9
                  ]
                ]) /
                (country.timeline.cases[
                  Object.keys(country.timeline.cases)[
                    Object.keys(country.timeline.cases).length - 20
                  ]
                ] -
                  country.timeline.cases[
                    Object.keys(country.timeline.cases)[
                      Object.keys(country.timeline.cases).length - 23
                    ]
                  ])) *
                50;
            incrementArray.push({
              name: country.country,
              province: country.province,
              increment: increment,
            });
          });
          firstdata.map((first) => {
            incrementArray.map((second) => {
              first.country.toLowerCase() === second.name.toLowerCase() &&
                myFinalData.push({
                  country: first.country,
                  province: second.province,
                  active: first.active,
                  cases: first.cases,
                  increment: second.increment,
                  countryInfo: first.countryInfo,
                  todayCases: first.todayCases,
                  todayRecovered: first.todayRecovered,
                  updated: first.updated,
                  showModal: false,
                });
            });
          });
          this.setState({
            countryCovidStats: myFinalData,
          });
        });
    };
    apiCall();
  }
  getChangeCases = (changedCases) => {
    this.setState({
      stabilityStat: changedCases,
    });
  };
  getCityAutoComplete = (city, originDestination) => {
    this.setState({
      [originDestination]: city,
    });
  };
  getDates = (startDate, endDate) => {
    let formattedStartDate = startDate
      ? moment(startDate).format("DD/MM/YYYY")
      : this.state.finalStartDate;
    let formattedEndDate = endDate
      ? moment(endDate).format("DD/MM/YYYY")
      : this.state.finalEndDate;
    this.setState({
      startDate,
      endDate,
      finalStartDate: formattedStartDate,
      finalEndDate: formattedEndDate,
    });
  };

  showStatistics = () => {
    this.setState({
      showStatistics: true,
      showHome: false,
      showTravel: false,
      showAttractions: false,
      showMap: false,
    });
  };
  showTravel = () => {
    this.setState({
      showStatistics: false,
      showHome: false,
      showTravel: true,
      showAttractions: false,
      showMap: false,
    });
  };

  showAttractions = () => {
    this.setState({
      showStatistics: false,
      showHome: false,
      showTravel: false,
      showAttractions: true,
      showMap: false,
      showTicket: false,
    });
  };

  showMap = () => {
    this.setState({
      showStatistics: false,
      showHome: false,
      showTravel: false,
      showAttractions: false,
      showMap: true,
    });
  };
  showHome = () => {
    this.setState({
      showStatistics: false,
      showHome: true,
      showTravel: false,
      showAttractions: false,
      showMap: true,
    });
  };
  showAboutUs = () => {
    this.setState({
      showAboutUs: !this.state.showAboutUs,
    });
  };

  getDetailedStats = () =>
    this.setState({ showDetailedStats: !this.state.showDetailedStats });

  findFlights = () => this.setState({ showTicket: true });
  render() {
    return (
      <div className="App">
        <div>
          <Navbar
            showTravel={this.showTravel}
            showStatistics={this.showStatistics}
            showAttractions={this.showAttractions}
            showHome={this.showHome}
          />
        </div>

        {this.state.showHome && (
          <div>
            <Banner />
            <div className="airport-search">
              <div className="from-main">
                <h2 className="from">From: </h2>
                
                <Airport
                  selectCity={this.getCityAutoComplete}
                  originDestination="cityFrom"
                  cities={this.state.airportsAndCities}
                />
              </div>
              <div className="to-main">
                <h2 className="to">To: </h2>
                <Airport
                  selectCity={this.getCityAutoComplete}
                  originDestination="cityTo"
                  cities={this.state.airportsAndCities}
                />
              </div>
              <div className="calendar">
                <DateRangePicker
                  // className="DateRangePicker"
                  startDatePlaceholderText="Depart"
                  endDatePlaceholderText="Return"
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.getDates(startDate, endDate)
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              </div>
            </div>
            <div className="main-find-flights">
              <button className="find-flights" onClick={this.findFlights}>
                Find Flights
              </button>
            </div>

            {this.state.showTicket && (
              <FlightCard
                cityFrom={this.state.cityFrom}
                cityTo={this.state.cityTo}
                endDate={this.state.finalEndDate}
                startDate={this.state.finalStartDate}
              />
            )}

            {this.state.countryCovidStats.length > 0 && (
              <>
                {this.state.showMap && (
                  <Map
                    countryCovidStats={this.state.countryCovidStats}
                    changedCases={this.state.stabilityStat}
                  />
                )}
              </>
            )}
            <div>
              <AttractionsHomePage showAttractions={this.showAttractions} />
            </div>
          </div>
        )}

        {this.state.showTravel && (
          <div>
            <TravelBanner />
            <div className="airport-search">
              <div className="from-main">
                <h2 className="from">From: </h2>

                <Airport
                  selectCity={this.getCityAutoComplete}
                  originDestination="cityFrom"
                  cities={this.state.airportsAndCities}
                />
              </div>
              <div className="to-main">
                <h2 className="to">To: </h2>
                <Airport
                  selectCity={this.getCityAutoComplete}
                  originDestination="cityTo"
                  cities={this.state.airportsAndCities}
                />
              </div>
              <div className="calendar">
                <DateRangePicker
                  // className="DateRangePicker"
                  startDatePlaceholderText="Depart"
                  endDatePlaceholderText="Return"
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.getDates(startDate, endDate)
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              </div>
            </div>
 
            
              <div className="main-find-flights">
              <button className="find-flights" onClick={this.findFlights}>
                Find Flights
              </button>

            </div>
            {this.state.showTicket && (
              <FlightCard
                cityFrom={this.state.cityFrom}
                cityTo={this.state.cityTo}
                endDate={this.state.finalEndDate}
                startDate={this.state.finalStartDate}
              />
            )}

            {this.state.countryCovidStats.length > 0 && (
              <>
                {this.state.showMap && (
                  <Map
                    countryCovidStats={this.state.countryCovidStats}
                    changedCases={this.state.stabilityStat}
                  />
                )}
              </>
            )}
          </div>
        )}
        {/* 
        {this.state.showTicket && (
          <FlightCard
            cityFrom={this.state.cityFrom}
            cityTo={this.state.cityTo}
            endDate={this.state.finalEndDate}
            startDate={this.state.finalStartDate}
          />
        )} */}
        {this.state.countryCovidStats.length > 0 && (
          <>
            {/* {this.state.showMap && (
              <Map
                countryCovidStats={this.state.countryCovidStats}
                changedCases={this.state.stabilityStat}
              />
            )} */}

            {this.state.showStatistics && (
              <div>
                <StatisticsBanner />
                <Statistics
                  countryCovidStats={this.state.countryCovidStats}
                  getChangeCases={this.getChangeCases}
                />
              </div>
            )}
          </>
        )}
        <div>
          <div>
            {/* <div>
              <AttractionsHomePage showAttractions={this.showAttractions} />
            </div> */}
            {this.state.showAttractions && (
              <div>
                <TravelBanner />
                <AttractionsCard />
            

                <TravelPoster />
              </div>
            )}
            {/* <AttractionsHomePage /> */}

            <CollabBanner />
            {/* <TravelPoster /> */}
            <Subscription />
            {this.state.showAboutUs && (
              <div>
                <AboutUs />
              </div>
            )}
            <Footer showAboutUs={this.showAboutUs} />
          </div>
        </div>
      </div>
    );
  }
}
