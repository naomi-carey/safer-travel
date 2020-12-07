import React from 'react'
import './AttractionsCard.css';
import axios from 'axios';

class AttractionsCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         Attractions: {},
//         }
//     };

//     componentDidMount() {
//       this.getAttractions()
//     }


//     getgetAttractions = () => 
//     axios.get('')
//         .then (response => {
//             console.log(response)
//           this.setState({
//             image:
//             location:
//             about:



//     })

// });




    render() {
    return (
        <div>
            <div className='attractionsbtn-container'>
            <button className='attractions-btn'>Europe</button>
            <button className='attractions-btn'>United Kingdom</button>
            <button className='attractions-btn'>Status</button>

            </div>

            <div className='attractionscard-container'>
            <div className ='attractions-card'>
            <img className='card-image' src='https://images.theconversation.com/files/182776/original/file-20170821-27160-1kwep4u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip' alt='Big Ben London' />
            <h3>Big Ben</h3>
            <h4 className='status-yellow'>Status: Moderate</h4>
            <p>Big Ben in london is currently on moderate level as London is in lockdown. </p>
            <button className='card-button' >More Info</button>
            </div>

            <div className ='attractions-card'>
            <img className='card-image' src='https://tourscanner.com/blog/wp-content/uploads/2019/05/London-Eye-tickets-deals.png' alt='London Eye' />
            <h3>London Eye</h3>
            <h4 className='status-red'>Status: Closed</h4>
            <p>Big Ben in london is currently on moderate level as London is in lockdown. </p>
            <button className='card-button' >More Info</button>
            </div>

            <div className ='attractions-card'>
            <img className='card-image' src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/10/20/buckingham-palace-pa.jpg' alt='Buckingham Palace' />
            <h3>Buckingham Palace</h3>
            <h4 className='status-green'>Status: Open</h4>
            <p>Big Ben in london is currently on moderate level as London is in lockdown. </p>
            <button className='card-button' >More Info</button>
            </div>

            <div className ='attractions-card'>
            <img className='card-image' src='https://www.p.city-walks.info/London/HM-Oxford-Circus.jpg' alt='Oxford Street London' />
            <h3>Oxford Street</h3>
            <h4 className='status-yellow'>Status: Moderate</h4>
            <p>Big Ben in london is currently on moderate level as London is in lockdown. </p>
            <button className='card-button' >More Info</button>
            </div>

            </div>
        </div>
    )
}
}

export default AttractionsCard;