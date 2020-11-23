import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react'; //google map package
// import mapStyle from './mapStyle'; //styled google map 
import axios from "axios"; //package to use api from Rest
import './Map.css';

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

  const countriesLocations = result.map((data, i) => {
    return(
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          height: '100px',
          width: '100px',
          textAlign: 'center',
          fontSize: '10px',
          borderRadius: '10px',
          color: 'black',
          margin: '2px'
        }}>

        <img height='20px' src={data.countryInfo.flag} />
        <br />
        <sup>Cases:{data.todayCases}</sup>
        
      </div>
    );
  });
  
  return (
    <div className="Map">
      <div style={{ height: '100vh', width: '100%', margin: '20px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{lat: 47, lng: 20}}
          options={{styles: light}}
          defaultZoom={5.5}>
          
          {countriesLocations}
        </GoogleMapReact>
      </div>

    
     
    </div>
  );
}


const light = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "lightness": "0"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "3"
          },
          {
              "lightness": "-36"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "lightness": "-63"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#92c0d3"
          },
          {
              "visibility": "on"
          }
      ]
  }
]

  export default Map;
