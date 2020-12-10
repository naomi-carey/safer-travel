import React from 'react'
import './AttractionsCard.css';

const AttractionsButton = props => (
  <button className='card-button' onClick={props.action}>{props.text}</button>
)

export default AttractionsButton;