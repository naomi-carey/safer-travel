import React, { Component } from "react";
import "./FlightBooking.css";
export default class FlightBooking extends Component {
  render() {
    return (
      <div className="FlightPage">
        <div>{/* <img className='banner' src='/imabanner2.jpg' /> */}</div>
        <div className="flight-type-cards">
          <div className="flight-type-card-1">
            <div className="flight-type-banner-1"></div>
            <h3 className="flight-type">Value</h3>
            <h4 className="flight-type">
              <em>Travel Light</em>
            </h4>
            <div className="bag-div">
              <div className="bag-div-icon">
                <img
                  className="flight-type-icon"
                  src="https://cdn3.iconfinder.com/data/icons/travel-flat-icons/130/luggage-2-512.png"
                  alt="baggage "
                />
              </div>
              <div className="bag-fiv-info">
                <p className="flight-type-1">Priority and 2 Cabin Bags</p>
                <p className="flight-type-2">
                  Board first, 10kg Cabin Bag and 1 small Bag
                </p>
              </div>
            </div>
            <div>
              <button className="flight-type-button-1">
                Continue with Value Fare
              </button>
            </div>
            {/* +++++++++++   SECOND CARD    ++++++++++++++++                  */}
          </div>
          <div className="flight-type-card">
            <div className="flight-type-banner-2"></div>
            <h3 className="flight-type">Regular</h3>
            <h4 className="flight-type">
              <em>Great for short trips</em>
            </h4>
            <div className="bag-div">
              <div className="bag-div-icon">
                <img
                  className="flight-type-icon"
                  src="https://cdn3.iconfinder.com/data/icons/travel-flat-icons/130/luggage-2-512.png"
                  alt="baggage "
                />
              </div>
              <div className="bag-fiv-info">
                <p className="flight-type-1">Priority and 2 Cabin Bags</p>
                <p className="flight-type-2">
                  Board first, 10kg Cabin Bag and 1 small Bag
                </p>
              </div>
            </div>
            <div className="seat-div">
              <div classNames="seat-div-icon">
                <img
                  className="flight-type-icon"
                  src="images/seat.png"
                  alt="seat"
                />
              </div>
              <div className="seat-div-info">
                <p className="flight-type-1">Researved Seat</p>
                <p className="flight-type-2">Specific rows available</p>
              </div>
            </div>
            <div>
              <button className="flight-type-button-2">SELECT (£10 Extra)</button>
            </div>
          </div>
          {/* +++++++++++   THIRD CARD    ++++++++++++++++                  */}
          <div className="flight-type-card">
            <div className="flight-type-banner-3"></div>
            <h3 className="flight-type">Plus</h3>
            <h4 className="flight-type">
              <em>Includes 20kg Check-in bag</em>
            </h4>
            <div className="bag-div">
              <div className="bag-div-icon">
                <img
                  className="flight-type-icon"
                  src="https://cdn3.iconfinder.com/data/icons/travel-flat-icons/130/luggage-2-512.png"
                  alt="baggage "
                />
              </div>
              <div className="bag-fiv-info">
                <p className="flight-type-1">Priority and 2 Cabin Bags</p>
                <p className="flight-type-2">
                  Board first, 20kg Cabin Bag and 1 small Bag
                </p>
              </div>
            </div>
            <div className="seat-div">
              <div classNames="seat-div-icon">
                <img
                  className="flight-type-icon"
                  src="images/seat.png"
                  alt="seat"
                />
              </div>
              <div className="seat-div-info">
                <p className="flight-type-1">Researved Seat</p>
                <p className="flight-type-2">Specific rows available</p>
              </div>
            </div>
            <div className="seat-div">
              <div classNames="seat-div-icon">
                <img
                  className="flight-type-icon"
                  src="images/cocktail.png"
                  alt="seat"
                />
              </div>
              <div className="seat-div-info">
                <p className="flight-type-1">Unlimited Alcohol</p>
                <p className="flight-type-2">Even the good stuff!!</p>
              </div>
            </div>
            <div>
              <button className="flight-type-button-3">SELECT (£20 Extra)</button>
            </div>
          </div>
          {/* +++++++++++   FOURTH CARD    ++++++++++++++++                  */}
          <div className="flight-type-card">
            <div className="flight-type-banner-4"></div>
            <h3 className="flight-type">Flexi Plus</h3>
            <h4 className="flight-type">
              <em>If you need flexibility</em>
            </h4>
            <div className="bag-div">
              <div className="bag-div-icon">
                <img
                  className="flight-type-icon"
                  src="https://cdn3.iconfinder.com/data/icons/travel-flat-icons/130/luggage-2-512.png"
                  alt="baggage "
                />
              </div>
              <div className="bag-fiv-info">
                <p className="flight-type-1">Priority and 2 Cabin Bags</p>
                <p className="flight-type-2">
                  Board first, 10kg Cabin Bag and 1 small Bag
                </p>
              </div>
            </div>
            <div className="seat-div">
              <div classNames="seat-div-icon">
                <img
                  className="flight-type-icon"
                  src="images/seat.png"
                  alt="seat"
                />
              </div>
              <div className="seat-div-info">
                <p className="flight-type-1">Researved Seat</p>
                <p className="flight-type-2">Specific rows available</p>
              </div>
            </div>
            <div className="seat-div">
              <div classNames="seat-div-icon">
                <img
                  className="flight-type-icon"
                  src="images/cocktail.png"
                  alt="seat"
                />
              </div>
              <div className="seat-div-info">
              <p className="flight-type-1">Unlimited Alcohol</p>
                <p className="flight-type-2">Even the good stuff!!</p>
              </div>
            </div>
            <div className="seat-div">
              <div classNames="seat-div-icon">
                <img
                  className="flight-type-icon"
                  src="images/businessclass.png"
                  alt="seat"
                />
              </div>
              <div className="seat-div-info">
                <p className="flight-type-1">Business Class</p>
                <p className="flight-type-2">With Free PJS and Slippers</p>
              </div>
            </div>
            <div>
              <button className="flight-type-button-4">SELECT (£30 Extra)</button>
            </div>
          </div>
        </div>
        {/* ++++++++++++++++++++ FLIGHT FORM ++++++++++++++++++++ */}
        <div className="flight-form-div">
          <form className="flight-form">
            <div className="flight-info-divs">
              <h3>Personal Details</h3>
              <input className="input" placeholder="First Name" />
              <input
                className="input"
                placeholder="Middle Name (If it appears on your passport"
              />
              <input className="input" placeholder="Last Name" />
              <input className="input" placeholder="Gender" />
            </div>
            <div className="flight-info-divs">
              <h3>Address Information</h3>
              <input className="input" placeholder="Address Line 1" />
              <input className="input" placeholder="Address Line 2" />
              <input className="input" placeholder="Town" />
              <input className="input" placeholder="City" />
              <input className="input" placeholder="Country" />
            </div>
            <div className="flight-info-divs">
              <h3>Travel Information</h3>
              <input className="input" placeholder="Passport Number" />
              <input className="input" placeholder="Frequent Flyer Miles" />
              <div>
                <button className="flight-info-button">SUBMIT</button>
              </div>
            </div>
          </form>
          <hr className="flight-hr"></hr>
          <div className="covid-guidelines">
            <img
              className="covid-guidelines-img"
              src="/images/covid-guidelines.jpg"
            />
            <img className="covid-guidelines-img" src="/images/hotels.jpg" />
          </div>
        </div>
      </div>
    );
  }
}