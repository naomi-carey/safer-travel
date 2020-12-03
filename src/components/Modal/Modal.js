import React from 'react';
import './Modal.css';
import Map from '../Map/Map'

export const Modal = ({ close, index, data }) => {

  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <span onClick={() => close(index)} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <p>Cases:{data.cases}</p>
          <p>Recovered:{data.recovered}</p>
          <p>Active:{data.active}</p>
          <p>Last Updated:{data.lastUpdated}</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => close(index)} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
}
