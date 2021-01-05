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
    <div className="map__border">
    <div className="GoogleMapReact">
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
        <div className="color__box">
          <p>Incremental Cases Per Population (Past 30 days)</p>
          <div className="color__rating">
            <input type="radio" name="rating" id="rate100"/>
            <label htmlFor="rate100">100%</label>
            <input type="radio" name="rating" id="rate90"/>
            <label htmlFor="rate90">90%</label>
            <input type="radio" name="rating" id="rate80"/>
            <label htmlFor="rate80">80%</label>
            <input type="radio" name="rating" id="rate70"/>
            <label htmlFor="rate70">70%</label>
            <input type="radio" name="rating" id="rate60"/>
            <label htmlFor="rate60">60%</label>
            <input type="radio" name="rating" id="rate50"/>
            <label htmlFor="rate50">50%</label>
            <input type="radio" name="rating" id="rate40"/>
            <label htmlFor="rate40">40%</label>
            <input type="radio" name="rating" id="rate30"/>
            <label htmlFor="rate30">30%</label>
            <input type="radio" name="rating" id="rate20"/>
            <label htmlFor="rate20">20%</label>
            <input type="radio" name="rating" id="rate10"/>
            <label htmlFor="rate10">10%</label>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Map;
