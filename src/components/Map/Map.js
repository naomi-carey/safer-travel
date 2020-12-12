// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// // import axios from "axios";
// import { FaGenderless } from "react-icons/fa";
// import "./Map-style";
// import "./Map.css";
// import { Modal } from "../Modal/Modal";
// import MapStyle from "./Map-style";

// // const apiUrl = 'https://corona.lmao.ninja/v2/countries?sort=countries'
// const API_KEY = `${process.env.REACT_APP_API_GOOGLEMAP_KEY}`;

// function Map(props) {
//   const [result, setLatest] = useState([...props.countryCovidStats]);

//   // useEffect(() => {
//   //   axios.get(apiUrl)
//   //     .then(response => {

// function Map(props) {
//   const [result, setLatest] = useState([...props.countryCovidStats]);

//   const toggleShowModal = index => {
//     let newResults = [...result]
//     newResults[index].showModal = !result[index].showModal
//     setLatest(newResults)
//   }

//   return (
//     <div style={{ height: "100vh", width: "100%", border: "0" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: API_KEY }}
//         defaultCenter={{ lat: 46, lng: 2 }}
//         options={{ styles: MapStyle.light, scrollwheel: false }}
//         defaultZoom={0}
//       >
//         {result.map((data, index) => {
//         const getColorInfected = () => (
//                 data.increment.toString() === "NaN" ||
//                 data.increment === Infinity
//                   ? "grey"
//                   : data.increment < 80
//                   ? "green"
//                   : data.increment > 120
//                   ? "red"
//                   : "gold"
//         )
//           return (
//             <div
//               key={index}
//               lat={data.countryInfo.lat}
//               lng={data.countryInfo.long}
//             >
//               <div>
//                 <button onClick={() => toggleShowModal(index)} className="marker"
//                 style={{color: getColorInfected()}}
//                   ><FaGenderless /></button>
//                 {
//                   data.showModal &&
//                     <Modal index={index} data={data} close={toggleShowModal} />
//                 }
//               </div>
//             </div>
//           );
//         })}
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default Map;

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
// import axios from "axios";
import { FaGenderless } from "react-icons/fa";
import "./Map-style";
import "./Map.css";
import { Modal } from "../Modal/Modal";
import MapStyle from "./Map-style";

// const apiUrl = 'https://corona.lmao.ninja/v2/countries?sort=countries'
const API_KEY = `${process.env.REACT_APP_API_GOOGLEMAP_KEY}`;

function Map(props) {
  const [result, setLatest] = useState([...props.countryCovidStats]);

  const toggleShowModal = (index) => {
    let newResults = [...result];
    newResults[index].showModal = !result[index].showModal;
    setLatest(newResults);
  };

  return (
    <div style={{ height: "100vh", width: "100%", border: "0" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: 46, lng: 2 }}
        options={{ styles: MapStyle.light, scrollwheel: false }}
        defaultZoom={0}
      >
        {result.map((data, index) => {
          const getColorInfected = () =>
            data.increment.toString() === "NaN" || data.increment === Infinity
              ? "grey"
              : data.increment < 80
              ? "green"
              : data.increment > 120
              ? "red"
              : "gold";
          return (
            <div
              key={index}
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
            >
              <div>
                <button
                  onClick={() => toggleShowModal(index)}
                  className="marker"
                  style={{ color: getColorInfected() }}
                >
                  <FaGenderless />
                </button>
                {data.showModal && (
                  <Modal index={index} data={data} close={toggleShowModal} />
                )}
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
