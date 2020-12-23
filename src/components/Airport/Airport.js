import React, { Component } from "react";
import "./Airport.css";
// import { airports } from "./Airports.js";

export default class Airport extends Component {
  state = {
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
    // cities: airports.map((city) => city.city),
  };

  inputChange = (event) => {
    const suggestions = this.props.cities;
    const userInput = event.currentTarget.value;

    const filteredCities = suggestions.filter(
      (suggestion) =>
        suggestion.city.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      filteredSuggestions: filteredCities,
      showSuggestions: true,
      userInput: event.currentTarget.value,
    });
  };

  suggestionClicked = (event, suggestion) => {
    this.props.selectCity(suggestion, this.props.originDestination);
    this.setState({
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText,
    });
  };

  render() {
    return (
      <div className="airport-main">
        <input
          autoComplete="off"
          id="searchBar"
          type="text"
          onChange={this.inputChange}
          value={this.state.userInput}
        />

        {this.state.showSuggestions &&
          this.state.userInput &&
          this.state.filteredSuggestions.length && (
            <div className="dropdown-flights">
              {this.state.filteredSuggestions.map((suggestion, index) => (
                <option
                  // classname="options"
                  key={index}
                  onClick={(event) => this.suggestionClicked(event, suggestion)}
                >
                  {suggestion.city}
                </option>
              ))}
              ;
            </div>
          )}
      </div>
    );
  }
}
