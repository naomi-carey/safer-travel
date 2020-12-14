import React from 'react'
import './AttractionsCard.css';

const AttractionsButton = props => (
  <button className='card-button' onClick={() => props.action(props.itemIndex)}>{props.text}</button>
)

export default AttractionsButton;