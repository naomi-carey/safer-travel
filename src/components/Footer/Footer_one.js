import React from "react";
import './Footer_one.css';
import Socialmedia from './Socialmedia';


const Footer = () => {
  return (
        <div className='body-footer'>

            <div className='logo.title'>
                <img className='logo' src='https://safetravel.id/img/ico.jpg' alt='logo'></img>
                <h1 className='h1-footer'>Safer Travel App</h1>
            </div>


             <div className='social-container'>
                <Socialmedia />
                <p>info@safer-travel.com</p>
             </div>

             <div className='explore-container'>
                <h3 className='h3.footer'>EXPLORE</h3>
                <btn className='btn'>✈️</btn>
                    <p className="btn-info">Flights</p>
                <btn className='btn'>✈️</btn>
                    <p className="btn-info">Attractions</p>
                <btn className='btn'>✈️</btn>
                    <p className="btn-info">Blog</p>
                <btn className='btn'>✈️</btn>
                    <p className="btn-info">Community</p>
             </div>


             <div className='blog-container'>
                <h3 className='h3.footer'>LATEST BLOG POST</h3>
                <div className='blog.preview'>malesuada fames ac turpis egestas integer eget aliquet nibh praesent</div>
                <div className='blog.preview'>malesuada fames ac turpis egestas integer eget aliquet nibh praesent</div>
                <div className='blog.preview'>malesuada fames ac turpis egestas integer eget aliquet nibh praesent</div>
             </div>




            <div className='bottom.container'>
            <hr className='hr'></hr>
            <p class='copyright'>©{new Date().getFullYear()} Safer Travel App Inc.</p>
            <p class='privacy'>Privacy Policy</p>
            <p class='termsofservice'>Terms of Service</p>      
            </div>

        </div>

  )
}

export default Footer;