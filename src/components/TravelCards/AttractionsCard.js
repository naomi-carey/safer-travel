import React from 'react'
import './AttractionsCard.css';
import './AttractionsList';
import { AttractionsList } from './AttractionsList';
import AttractionsButton from './AttractionsButton';

class AttractionsCard extends React.Component {

    state = {
        showAbout: false
    }

    showModal = () => {
        this.setState ({
            showAbout: true
        })
    }

    closeModal = () => {
        this.setState ({
            showAbout: false
        })
    }


    render() {
    return (
        <div>
            <div className='attractionsbtn-container'>
            <button className='attractions-btn'>Europe</button>
            <button className='attractions-btn'>United Kingdom</button>
            <button className='attractions-btn'>Status</button>

            </div>

            <div className='attractions-container'>
            {AttractionsList.map((attractions) => {
                return (
                <div className= 'attractions-card'>
                <img className='card-image' src={attractions.picture} alt={attractions.attraction} />
                <h3>{attractions.location}</h3>
                <h4>{attractions.city}</h4>
                <h4>{attractions.Attraction}</h4>
                <h4 className='status-yellow'>{attractions.status}</h4>
                <div>
                <AttractionsButton className='card-button' text='Show more' action={this.showModal} />
                </div>
                {
          this.state.showAbout &&
          <div className='modal'>
            <img className='card-image' src={attractions.picture} alt={attractions.attraction} />
            <h3>{attractions.location}</h3>
            <h4>{attractions.city}</h4>
            <h4>{attractions.Attraction}</h4>     
            <AttractionsButton text='Close' action={this.closeModal} />
          </div>
        }
                </div>
               
            ) 
            })}
            </div>
            </div>
        

           

            
       
    )
}
}

export default AttractionsCard;
