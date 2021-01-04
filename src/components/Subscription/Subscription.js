import React, { Component } from 'react'
import './Subscription.css'

export default class Subscription extends Component {
    render() {
        return (
            <div className='sub-body-div'
            >
                <div className='sub-div'>
                    <div className='sub-info-div'>
                <h3 className='sub-heading'>Explore the world with us</h3>
                <p  className='sub-p'>Sign up for our newsletter and we'll send you the best, and safest offers each week.</p>
                <div>
                <input className='sub-email-box' placeholder='Email Address ...'/>
                <button className='sub-btn'>Subscribe</button>
                <div> 
                    <p className='sub-p'>
                    By submitting your email, you consent to receiving automatically-created and personalised communications including deals and offers about our and our selected partners products and services (we do not share your data collected here with these partners). For more info, or if you want to unsubscribe, check our Privacy Policy (or you can unsubscribe by clicking the link in our emails).
                    </p>
                </div>
                </div>

                </div>
                </div>
                <div className='sub-img-div'>
                    <img className='sub-img' src='images/stamp.png' alt='safe travel logo' />
                </div>
            </div>
        )
    }
}
