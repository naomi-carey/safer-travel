import React, { Component } from 'react';
import './TravelPoster.css';

export default class TravelPoster extends Component {
    render() {
        return (
            <div className='travel-destinations-img-div' >
                <div>
                <img className='travel-destinations-img' src='/images/safe-destinations.png' alt='Safe Destinations'/>            
                </div>
            </div>
        )
    }
}
