import React, { Component } from "react";
import Map from "./components/Map";
import Statistics from "./components/Statistics";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/TravelCards/Card";
import FlightCard from "./components/Flights/FlightCard";
import Airport from "./components/Airport";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class App extends Component {
  state = {
    showFlights: false,
    flightData: {},
    cityFrom: {},
    cityTo: {},
    startDate: null,
    endDate: null,
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
  }

  alertStartDate = () => {
    console.log(this.state.startDate);
  };

  alertEndDate = () => {
    console.log(this.state.endDate);
  };

  getCityAutoComplete = (city, originDestination) => {
    this.setState({
      [originDestination]: city,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="airport-search">
          <h2 className="from">From: </h2>
          <Airport
            selectCity={this.getCityAutoComplete}
            originDestination="cityFrom"
          />
          <h2 className="to">To: </h2>
          <Airport
            selectCity={this.getCityAutoComplete}
            originDestination="cityTo"
          />
          <div className="calendar">
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </div>
          {/* <div>
            <button onClick={this.alertStartDate}>
              Click Me for Start Date
            </button>
            <button onClick={this.alertEndDate}>Click Me for End Date</button>
          </div> */}
        </div>
        <FlightCard />
        <Map />
        <Statistics />
      </div>
    );
  }
}
