import React from "react";
import './Footer_one.css';
import Socialmedia from './Socialmedia';


const Footer = () => {
  return (
        <div>

            <div className='top.container'>
            <img className='logo' src='https://safetravel.id/img/ico.jpg' alt='logo'></img>
            <h1 className='h1.footer'>Safer Travel App</h1>
            </div>

            <div className='social.container'>
            <Socialmedia />
            </div>

            <div className='bottom.container'>
            <p class='copyright'>©{new Date().getFullYear()} Safer Travel App Inc.</p>
            <p class='privacy'>Privacy Policy</p>
            <p class='termsofservice'>Terms of Service</p>      
            </div>

        </div>

  )
}

export default Footer;