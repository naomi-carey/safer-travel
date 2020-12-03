import React from 'react';
import './Modal.css';
import Map from '../Map/Map'

export const Modal = ({ show, close, data }) => {
 
    return (
        <div className="modal-wrapper"
        style={{
            opacity: show ? '1' : '0'
        }}>
            
            {/* <Map result={result}/> */}

            <div className="modal-header">
            {/* <h1>Country:{data.coutryInfo.flag}</h1> */}
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
            <div className="modal-body">
            <p>Cases:{data.cases}</p>
                <p>Recovered:{data.recovered}</p>
                <p>Active:{data.active}</p>
                <p>Last Updated:{data.lastUpdated}</p>
            </div>
            <div className="modal-footer">
                <button onClick={close} className="btn-cancel">Close</button>
            </div>
            </div>
        </div>
    )
}

