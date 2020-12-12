import React from 'react'
import './AttractionsCard.css';
import './AttractionsList';
import { AttractionsList } from './AttractionsList';
import AttractionsButton from './AttractionsButton';

class AttractionsCard extends React.Component {

    state = {
        showAbout: false,
        search: ''
    }

    // renderCountry = country => {
    //     const {search} = this.state;
    //     let code  = country.code.toLowerCase() 

    //     if (search !== "" && country.name.toLowerCase().indexOf(search.toLowerCase()) === -1 ){
    //         return null
    //     }
    // }

    showModal = () => {
        this.setState ({
            showAbout: true
        })
    }

    closeModal = () => {
        this.setState ({
            showAbout: false,
        })
    }

    onChange= e => {
        this.setState({
            search: e.target.value
        })
    }


    render() {

        const {search} = this.state;
        const filteredCountries = AttractionsList.filter(country => {
            return country.location.toLowerCase().indexOf(search.toLowerCase()) !== -1 
            || country.city.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
      
    return (
        <div>
           
            <input  
                    className='attractions-search-box' 
                    type='text' 
                    placeholder='Search....'  
                    onChange={this.onChange}
                    />

            <div className='attractions-container'>

            {filteredCountries.map((attractions) => {
                return (
                <div className= 'attractions-card'>
                <img className='card-image' src={attractions.picture} alt={attractions.attraction} />
                <h3 className='attractions-card-info'>{attractions.location}</h3>
                <h4 className='attractions-card-info'>{attractions.city}</h4>
                <h4 className='attractions-card-info'>{attractions.Attraction}</h4>
                <div className={attractions.status? 'status-open': 'status-closed'}>
                <h4 className='status-text'>Status: {attractions.status? 'Open': 'Closed'}</h4>
                </div>
              
                <AttractionsButton className='card-button' text='Show more' action={this.showModal} />
              
                {
                    this.state.showAbout &&
                    <div className='modal'>
                        <img className='card-image' src={attractions.picture} alt={attractions.attraction} />
                        <h3>{attractions.location}</h3>
                        <h4>{attractions.city}</h4>
                        <h4>{attractions.Attraction}</h4>   
                            <p>{attractions.longAbout[0]}</p>  
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
