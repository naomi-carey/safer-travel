import React from "react";
import "./FlightCard.css";
import axios from "axios";
import Loading from "../LoadingScreen/Loading.js";

class FlightCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TravelInfo: [],
      apiFinished: false,
    };
  }

  componentDidMount() {
    this.getTravelInfo();
  }

  getTravelInfo = () =>
    axios
      .get(
        `https://api.skypicker.com/flights?flyFrom=${this.props.cityFrom["iata_code"]}&to=${this.props.cityTo["iata_code"]}&dateFrom=${this.props.startDate}&dateTo=${this.props.endDate}&partner=picky&v=3`
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          flight_test:response.data.data,
          apiFinished: true,
        });
      });

  render() {

    return (
      <div>
        {!this.state.apiFinished ?
          <Loading />
          : 
          this.state.flight_test.map((flight, index) => {

            const date = new Date(parseInt(flight.dTime) * 1000);
            const hour_min = date.toLocaleTimeString().slice(0, 5);
        
            const date2 = new Date(parseInt(flight.aTime) * 1000);
            const hour1_min = date2.toLocaleTimeString().slice(0, 5);

            return (
              <div key={index} className="flightcard-container">
              <div className="flight-card">
                <div className="flight-card">
                  <div className="airline">
                    <img
                      className="ryanair"
                      src="https://i0.wp.com/www.logoquizcheat.com/1984kqjmmm-22lqc/uploads/ryanair-meeyo-logo-quiz.jpg"
                      alt="Ryanair Logo"
                    />
                    <p className="flight-info">Ryanair</p>
                  </div>
                  <div className="departure">
                    <h2 className="flight-info">{hour_min}</h2>
                    <h3 className="flight-info">{flight.flyFrom}</h3>
                  </div>
                  <div className="duration">
                    <p className="flight-info">{flight.fly_duration}</p>
                    {/* <div>
                    <hr className="flight-hr"></hr>
                    </div> */}
                  </div>
                  <div className="arrival">
                    <h2 className="flight-info">{hour1_min}</h2>
                    <h3 className="flight-info">{flight.flyTo}</h3>
                  </div>
                </div>
                <div className="price-card">
                  <div className="price">
                    <h2 className="price-figure">£ {flight.price}</h2>
                  </div>
                  <div className="price-button">
                    <button className="price-btn">SELECT</button>
                  </div>
                </div>
              </div>
            </div>
            
            )})
          
        }
      </div>
    );
  }
}

export default FlightCard;
