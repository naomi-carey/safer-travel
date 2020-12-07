import React from 'react'
import './FlightCard.css'
import axios from 'axios';

class FlightCard extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        TravelInfo: {},
        }
    };

    componentDidMount() {
      this.getTravelInfo()
    }


    getTravelInfo = () => 
    axios.get('https://api.skypicker.com/flights?flyFrom=PRG&to=STN&dateFrom=23/12/2020&dateTo=23/12/2020&partner=picky&v=3')
        .then (response => {
            console.log(response)
          this.setState({
            departure: response.data.data[0].dTime,
            arrival: response.data.data[0].aTime,
            flyFrom: response.data.data[0].flyFrom,
            flyTo: response.data.data[0].flyTo,
            duration: response.data.data[0].fly_duration,
            price: response.data.data[0].price,

    })

});

    render() {

        const date = new Date(parseInt(this.state.departure)*1000);
        const hour_min = date.toLocaleTimeString().slice(0, 5);

        const date2 = new Date(parseInt(this.state.arrival)*1000);
        const hour1_min = date2.toLocaleTimeString().slice(0, 5);


    return (
        <div>
            <div className='flightcard-container'>
                    <div className='flight-card'>
                        <div className='flight-card'>
                            <div className='airline'>
                                <img className='ryanair' src='https://i0.wp.com/www.logoquizcheat.com/1984kqjmmm-22lqc/uploads/ryanair-meeyo-logo-quiz.jpg' alt='Ryanair Logo' />
                                <p className='flight-info'>Ryanair</p>
                            </div>
                            <div className='departure'>
                                <h2 className='flight-info'>{hour_min}</h2>
                                <h3 className='flight-info'>{this.state.flyFrom}</h3>
                            </div>
                            <div className='duration'>
                                <p className='flight-info'>{this.state.duration}</p>
                                <hr className='flight-hr'></hr>
                            </div>
                            <div className='arrival'>
                                <h2 className='flight-info'>{hour1_min}</h2>
                                <h3 className='flight-info'>{this.state.flyTo}</h3>
                            </div>
                        
                    </div>
                        <div className='price-card'>
                            <div className='price'>
                                <h2 className='price-figure'>£ {this.state.price}</h2>
                            </div>
                            <div className='price-button'>
                                <button className='price-btn'>SELECT</button>
                            </div>
                        </div>
            </div>
            </div>
        </div>
    )
}
}

export default FlightCard;

