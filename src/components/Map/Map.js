import React, { useEffect, useState } from 'react'; 
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import { FaGenderless } from "react-icons/fa";
import './Map-style';
import './Map.css';
import { Modal } from '../Modal/Modal';
import MapStyle from './Map-style';

const apiUrl = 'https://corona.lmao.ninja/v2/countries?sort=countries'
const API_KEY = `${process.env.REACT_APP_API_GOOGLEMAP_KEY}`;



function Map() {

    const [result, setLatest] = useState([]);
    
    useEffect(() => {
    axios.get(apiUrl)
    .then(response => {
      setLatest(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  });

    // function Map(props){
    //     return(
    //     <p>Cases:{data.cases}</p>
    //     <p>Recovered:{data.recovered}</p>
    //     <p>Active:{data.active}</p>
    //     <p>Last Updated:{lastUpdated}</p>
    //     )}
    
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);


    
  
  return (
      <div style={{ height: '100vh', width: '100%', border: '0' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{lat: 46, lng: 2}}
          options={{styles: MapStyle.light}}
          defaultZoom={5}>
              {/* <Modal
                lat={46}
                lng={2}
                text="My Marker"
                /> */}
          
        {result.map((data, index) => {

return(
  <div key={index}
    lat={data.countryInfo.lat}
    lng={data.countryInfo.long}
    >
        
    <div>
    { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }

    <button onClick={() => setShow(true)} className="marker"><FaGenderless /></button>

    <Modal show={show} data={data} close={closeModalHandler} />
    </div>

   
</div>
);
})}
    
        </GoogleMapReact>
      </div>
  );
}



  export default Map;
