import {useState} from 'react';
import { AttractionsList } from './AttractionsList';

export default function SearchBox(){

    const [search, setSearch] = useState('')

    return(
        <div>
             <input className='attractions-search-box' type='text' placeholder='Search...' onChange={(e) => {
                 setSearch(e.target.value)
             }}/>

           
            {AttractionsList.filter(filter => {
                if (search == "") {
                    return filter
                } else if (filter.location.toLowerCase().includes(search.toLowerCase())){
                    return filter 
                }
            })

            .map((attractions) => {
                return (
                <div className= 'attractions-card'>
                    <img className='card-image' src={attractions.picture} alt={attractions.attraction} />
                    <h3>{attractions.location}</h3>
                    <h4>{attractions.city}</h4>
                    <h4>{attractions.Attraction}</h4>
                    <h4 className='status-yellow'>{attractions.status}</h4>
                </div> 
                )
            })
        }</div>
    )
}