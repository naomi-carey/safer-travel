import React from "react";
import "./FlightCard.css";
import axios from "axios";
import Loading from "../LoadingScreen/Loading.js";
import TravelBanner from "../Banners/TravelBanner";
import FlightBooking from "../FlightBooking/FlightBooking";
import { Switch, Route, Link } from "react-router-dom";

class FlightCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TravelInfo: [],
      apiFinished: false,
      /*  showFlightBooking: false, */
    };
  }

  componentDidMount() {
    this.getTravelInfo();
  }
  // showIsBooking = () => {
  //   this.setState({ showFlightBooking: true });
  // };

  /*  showIsBooking = () => this.setState({ showFlightBooking: true }); */

  getTravelInfo = () =>
    axios
      .get(
        `https://api.skypicker.com/flights?flyFrom=${this.props.cityFrom["iata_code"]}&to=${this.props.cityTo["iata_code"]}&dateFrom=${this.props.startDate}&dateTo=${this.props.endDate}&partner=webdevstudentsafertraveltest&v=3`
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          flight_test: response.data.data,
          apiFinished: true,
        });
      });

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <div>
            <div className="flightcard-section">
              <div className="flight-cards">
                {!this.state.apiFinished ? (
                  <Loading />
                ) : (
                  <>
                    {this.state.flight_test.map((flight, index) => {
                      const date = new Date(parseInt(flight.dTime) * 1000);
                      const hour_min = date.toLocaleTimeString().slice(0, 5);

                      const date2 = new Date(parseInt(flight.aTime) * 1000);
                      const hour1_min = date2.toLocaleTimeString().slice(0, 5);

                      return (
                        <div>
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
                                  <h3 className="flight-info">
                                    {flight.flyFrom}
                                  </h3>
                                </div>
                                <div className="duration">
                                  <p className="flight-info">
                                    {flight.fly_duration}
                                  </p>
                                  <div>
                                    <img
                                      className="flight-card-plane"
                                      src="images/plane.png"
                                      alt="HR"
                                    />
                                  </div>
                                  {/* <div>
                    <hr className="flight-hr"></hr>
                    </div> */}
                                </div>
                                <div className="arrival">
                                  <h2 className="flight-info">{hour1_min}</h2>
                                  <h3 className="flight-info">
                                    {flight.flyTo}
                                  </h3>
                                </div>
                              </div>
                              <div className="price-card">
                                <div className="price">
                                  <h2 className="price-figure">
                                    £ {flight.price}
                                  </h2>
                                </div>
                                <div className="price-button">
                                  <Link to="/booking">
                                    <button
                                      onClick={this.showIsBooking}
                                      // onClick={() => this.showIsBooking}
                                      className="price-btn"
                                    >
                                      SELECT
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
              <div className="flight-card-img">
                <img className="bupa-img" src="/images/Travel-safe.jpg" />
                <img className="bookingcom-img" src="/images/booking.jpg" />
              </div>
            </div>
          </div>
          );
        </Route>
        <Route exact path="/booking">
          <div>
            <div className="flightcard-section">
              <div className="flight-cards">
                {!this.state.apiFinished ? <Loading /> : <FlightBooking />}
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default FlightCard;

// import React from "react";
// import "./FlightCard.css";
// import axios from "axios";
// import Loading from "../LoadingScreen/Loading.js";
// import TravelBanner from "../Banners/TravelBanner";
// import FlightBooking from "../FlightBooking/FlightBooking";
// import { Switch, Route, Link } from "react-router-dom";

// class FlightCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       TravelInfo: [],
//       apiFinished: false,
//       showFlightBooking: false,
//     };
//   }

//   componentDidMount() {
//     this.getTravelInfo();
//   }
//   // showIsBooking = () => {
//   //   this.setState({ showFlightBooking: true });
//   // };

//   showIsBooking = () => this.setState({ showFlightBooking: true });

//   getTravelInfo = () =>
//     axios
//       .get(
//         `https://api.skypicker.com/flights?flyFrom=${this.props.cityFrom["iata_code"]}&to=${this.props.cityTo["iata_code"]}&dateFrom=${this.props.startDate}&dateTo=${this.props.endDate}&partner=picky&v=3`
//       )
//       .then((response) => {
//         // console.log(response);
//         this.setState({
//           flight_test: response.data.data,
//           apiFinished: true,
//         });
//       });

//   render() {
//     return (
//       <div>
//         <div className="flightcard-section">
//           <div className="flight-cards">
//             {!this.state.apiFinished ? (
//               <Loading />
//             ) : (
//               <Switch>
//                 <Route exact path="/">
//                   {this.state.flight_test.map((flight, index) => {
//                     const date = new Date(parseInt(flight.dTime) * 1000);
//                     const hour_min = date.toLocaleTimeString().slice(0, 5);

//                     const date2 = new Date(parseInt(flight.aTime) * 1000);
//                     const hour1_min = date2.toLocaleTimeString().slice(0, 5);

//                     return (
//                       <div>
//                         <div key={index} className="flightcard-container">
//                           <div className="flight-card">
//                             <div className="flight-card">
//                               <div className="airline">
//                                 <img
//                                   className="ryanair"
//                                   src="https://i0.wp.com/www.logoquizcheat.com/1984kqjmmm-22lqc/uploads/ryanair-meeyo-logo-quiz.jpg"
//                                   alt="Ryanair Logo"
//                                 />
//                                 <p className="flight-info">Ryanair</p>
//                               </div>
//                               <div className="departure">
//                                 <h2 className="flight-info">{hour_min}</h2>
//                                 <h3 className="flight-info">
//                                   {flight.flyFrom}
//                                 </h3>
//                               </div>
//                               <div className="duration">
//                                 <p className="flight-info">
//                                   {flight.fly_duration}
//                                 </p>
//                                 <div>
//                                   <img
//                                     className="flight-card-plane"
//                                     src="images/plane.png"
//                                     alt="HR"
//                                   />
//                                 </div>
//                                 {/* <div>
//                     <hr className="flight-hr"></hr>
//                     </div> */}
//                               </div>
//                               <div className="arrival">
//                                 <h2 className="flight-info">{hour1_min}</h2>
//                                 <h3 className="flight-info">{flight.flyTo}</h3>
//                               </div>
//                             </div>
//                             <div className="price-card">
//                               <div className="price">
//                                 <h2 className="price-figure">
//                                   £ {flight.price}
//                                 </h2>
//                               </div>
//                               <div className="price-button">
//                                 <Link to="/booking">
//                                   <button
//                                     onClick={this.showIsBooking}
//                                     // onClick={() => this.showIsBooking}
//                                     className="price-btn"
//                                   >
//                                     SELECT
//                                   </button>
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </Route>
//                 <Route exact path="/booking">
//                   <FlightBooking />
//                 </Route>
//               </Switch>
//             )}
//           </div>
//           {!this.state.showFlightBooking && (
//             <div className="flight-card-img">
//               <img className="bupa-img" src="/images/Travel-safe.jpg" />
//               <img className="bookingcom-img" src="/images/booking.jpg" />
//             </div>
//           )}
//           <div></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default FlightCard;
