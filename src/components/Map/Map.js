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

        let responseWithToggleShow = response.data.map(data => ({ ...data, showModal: false }))
        // console.log(responseWithToggleShow)
        setLatest(responseWithToggleShow);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleShowModal = index => {
    let newResults = [...result]
    newResults[index].showModal = !result[index].showModal
    setLatest(newResults)
  }

  return (
    <div style={{ height: '100vh', width: '100%', border: '0' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: 46, lng: 2 }}
        options={{ styles: MapStyle.light,
                  scrollwheel:false }}
        defaultZoom={0}
      >
        {result.map((data, index) => {
        // console.log(data.country);
        const getColorInfected = () => {
          if (data.cases >= 1000) {
            return "red"
          }
          else if (data.cases >= 100) {
            return "yellow"
          }
          else {
            return "green"
          } 
          } //color stat
          return (
            <div key={index}
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
            >
              <div>
                <button onClick={() => toggleShowModal(index)} className="marker"
                style={{color: getColorInfected(data.cases)}} //color stat 
                ><FaGenderless /></button>
                {
                  data.showModal &&
                    <Modal index={index} data={data} close={toggleShowModal} />
                }
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}



export default Map;