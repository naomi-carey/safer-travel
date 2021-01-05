import React, { useState} from 'react'
import './AttractionsHomePage.css'

const AttractionsHomePage = (props) => {

        return (
            <div className='attractions-home-div'>
            <div className='attractions-home-heading-div' >
                    <h3 className='attractions-home-heading'>PLAN YOUR NEXT GETAWAY</h3>
                </div>
            <div >
                  <div className='attractions-home-card-div'>
                    <img onClick={props.showAttractions} className='attractions-home-card-img1' src='/images/dublin-poster.jpg' alt='dublin-poster'/>
                    <img onClick={props.showAttractions} className='attractions-home-card-img2' src='/images/madrid-poster.jpg' alt='madrid-poster'/>
                    <img onClick={props.showAttractions} className='attractions-home-card-img3' src='/images/london-poster.jpg' alt='london-poster'/>
                    <img onClick={props.showAttractions} className='attractions-home-card-img4' src='/images/berlin-poster.png' alt='berlin-poster'/>
                    <img onClick={props.showAttractions} className='attractions-home-card-img5' src='/images/berlin-poster.png' alt='europe-poster'/>
                  </div>
            </div>
            </div>
        )
    }



export default AttractionsHomePage 