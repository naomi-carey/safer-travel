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
import Loading from "./components/LoadingScreen/Loading";
// import "./react_dates_overrides.css";
export default class App extends Component {
  state = {
    showFlights: false,
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

  // alertStartDate = () => {
  //   console.log(this.state.startDate);
  // };

  // alertEndDate = () => {
  //   console.log(this.state.endDate);
  // };

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

  findFlights = () => this.setState({ showTicket: true });

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <Banner />
        </div>

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
              className="DateRangePicker"
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
              onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </div>
        </div>
        <div className="main-find-flights">
          <button className="find-flights" onClick={this.findFlights}>
            Find Flights
          </button>
        </div>

        {/* <div className="airport-search">
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
         
        </div>

        <div className="calendar">
          <DateRangePicker
            className="DateRangePicker"
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
            onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>
        <div className="main-find-flights">
          <button className="find-flights" onClick={this.findFlights}>
            Find Flights
          </button>
        </div> */}

        {this.state.showTicket && (
          <FlightCard
            cityFrom={this.state.cityFrom}
            cityTo={this.state.cityTo}
            endDate={this.state.finalEndDate}
            startDate={this.state.finalStartDate}
          />
        )}
        <Map changedCases={this.state.stabilityStat} />
        <Statistics getChangeCases={this.getChangeCases} />
        <div>
          <AttractionsCard />
          <Loading />
          <Footer />
        </div>
      </div>
    );
  }
}
