import React, { Component } from "react";
import "./Airport.css";
import { airports } from "./Airports.js";

export default class Airport extends Component {
  state = {
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
    cities: airports.map((city) => city.city),
  };

  inputChange = (event) => {
    const suggestions = this.state.cities;
    const userInput = event.currentTarget.value;

    const filteredCities = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      filteredSuggestions: filteredCities,
      showSuggestions: true,
      userInput: event.currentTarget.value,
    });
  };

  suggestionClicked = (event) => {
    this.props.selectCity(
      event.currentTarget.innerText,
      this.props.originDestination
    );
    this.setState({
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText,
    });
  };

  render() {
    return (
      <div className="main">
        <input
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
                  classname="options"
                  key={index}
                  onClick={this.suggestionClicked}
                >
                  {suggestion}
                </option>
              ))}
              ;
            </div>
          )}
      </div>
    );
  }
}
