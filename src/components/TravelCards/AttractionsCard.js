import React from "react";
import "./AttractionsCard.css";
import "./AttractionsList";
import { AttractionsList } from "./AttractionsList";
import AttractionsButton from "./AttractionsButton";

class AttractionsCard extends React.Component {
  state = {
    showAbout: false,
    search: "",
    attractionslist: AttractionsList.map((attraction) => ({
      ...attraction,
      showAbout: false,
    })),
  };

  // renderCountry = country => {
  //     const {search} = this.state;
  //     let code  = country.code.toLowerCase()

  //     if (search !== "" && country.name.toLowerCase().indexOf(search.toLowerCase()) === -1 ){
  //         return null
  //     }
  // }

  // showModal = (itemIndex) => {
  //   this.setState({
  //     showAbout: true,
  //   });
  // };

  toggleShowModal = (index) => {
    let newResults = [...this.state.attractionslist];
    newResults[index].showAbout = !this.state.attractionslist[index].showAbout;
    this.setState({
      attractionslist: newResults,
    });
  };

  closeModal = () => {
    this.setState({
      showAbout: false,
    });
  };

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = this.state.attractionslist.filter((country) => {
      return (
        country.location.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        country.city.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <input
          className="attractions-search-box"
          type="text"
          placeholder="Search...."
          onChange={this.onChange}
        />

        <div className="attractions-container">
          {filteredCountries.map((attractions, index) => {
            return (
              <div 
              key={index}
              className="attractions-card">
                <div className="card">
                  <img
                    className="card-image"
                    src={attractions.picture}
                    alt={attractions.attraction}
                  />
                  <h3 className="attractions-card-info">
                    {attractions.location}
                  </h3>
                  <h4 className="attractions-card-info">{attractions.city}</h4>
                  <h4 className="attractions-card-info">
                    {attractions.Attraction}
                  </h4>
                  <div
                    className={
                      attractions.status === "Open"
                        ? "status-open"
                        : attractions.status === "Moderate"
                        ? "status-moderate"
                        : "status-closed"
                    }
                  >
                    <h4 className="status-text">
                      Status: {attractions.status}
                    </h4>
                  </div>
                </div>

                <AttractionsButton
                  className="card-button"
                  itemIndex={index}
                  text="Show more"
                  action={() => this.toggleShowModal(index)}
                  // longAbout={attractions.longAbout[0]}
                />

                {attractions.showAbout && (
                  <div className="modal">
                    <img
                      className="card-image"
                      src={attractions.picture}
                      alt={attractions.attraction}
                    />

                    <h3>{attractions.location}</h3>
                    <h4>{attractions.city}</h4>
                    <h4>{attractions.Attraction}</h4>
                    <p>{attractions.longAbout[0]}</p>

                    <AttractionsButton
                      text="Close"
                      action={() => this.toggleShowModal(index)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AttractionsCard;
