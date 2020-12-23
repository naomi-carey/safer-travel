import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaGenderless } from "react-icons/fa";
import "./Map-style";
import "./Map.css";
import { Modal } from "../Modal/Modal";
import MapStyle from "./Map-style";

const API_KEY = `${process.env.REACT_APP_API_GOOGLEMAP_KEY}`;

function Map(props) {
  const [result, setLatest] = useState([...props.countryCovidStats]);

  const toggleShowModal = (index) => {
    let newResults = [...result];
    newResults[index].showModal = !result[index].showModal;
    setLatest(newResults);
  };

  return (
    <div style={{ height: "100vh", width: "97%", border: "0", margin: "20px" }}>
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
              : data.increment < 55
              ? "green"
              : data.increment > 90
              ? "red"
              : "gold";

          const AnyReactComponent = () => <div>
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
              </div>;
          
          return (
            <AnyReactComponent
              key={index}
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
