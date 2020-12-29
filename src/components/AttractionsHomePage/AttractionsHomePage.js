import React, { Component } from 'react'
import './AttractionsHomePage.css'

export default class AttractionsHomePage extends Component {
    render() {
        return (
            <div className='attractions-home-div'>
            <div className='attractions-home-heading-div' >
                    <h3 className='attractions-home-heading'>PLAN YOUR NEXT GETAWAY</h3>
                </div>
            <div >
                  <div className='attractions-home-card-div'>
                    <img className='attractions-home-card-img1' src='/images/dublin-poster.jpg' alt='dublin-poster'/>
                    <img className='attractions-home-card-img' src='/images/madrid-poster.jpg' alt='madrid-poster'/>
                    <img className='attractions-home-card-img' src='/images/london-poster.jpg' alt='london-poster'/>
                    <img className='attractions-home-card-img' src='/images/berlin-poster.png' alt='berlin-poster'/>
                  </div>
            </div>
            </div>
        )
    }
}
