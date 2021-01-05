import React from 'react';
import './Modal.css';
// import Map from '../Map/Map'

export const Modal = ({ close, index, data }) => {

    const date = new Date(data.updated);
    const lastUpdated = date.toLocaleDateString();

  return (
    <div className="modal-wrapper">
      <div className="modal-header"> 
        <span onClick={() => close(index)} className="close-modal-btn">x</span>
          <img src={data.countryInfo.flag} alt="flag"/>
          <h1>{data.country}</h1>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <p className='daily__d'>Daily Cases:{data.todayCases}</p>
          <p>Daily Recovered:{data.todayRecovered}</p>
          <p>Total Cases:{data.cases}</p>
          <p className='last__l'>Last Updated:{lastUpdated}</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => close(index)} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
}
