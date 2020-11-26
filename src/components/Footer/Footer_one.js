import React from "react";
import './Footer_one.css';

const Footer = () => {
  return (
      <div className='main-footer'>
        <div className='container'>
            <div className='rows'>
                <div className='col'>
                    <h4>CONTACT US</h4>
                    <ul className='list-unstyled'>
                        <li>Safer Travel App</li>
                        <li>342-420 7895</li>
                        <li>Madrid, Spain</li>
                        <li>123 Calle Sud</li>
                    </ul>
                </div>
                
                <div className='col'>
                    <h4>SUPPORT US</h4>
                    <ul className='list-unstyled'>
                        <button>MAKE A GIFT</button>

                    </ul>
                </div>
                <div className='col'>
                    <h4>FOLLOW US</h4>
                    <ul className='list-unstyled'>
                        <li className='socialmedia'><img src="https://www.flaticon.com/authors/freepik" alt="facebook"></img></li>
                        <li className='socialmedia'><img src="https://www.flaticon.com/authors/freepik" alt="instagram"></img></li>
                        <li className='socialmedia'><img src="https://www.flaticon.com/authors/freepik" alt="twitter"></img></li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className='row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Safer Travel App | All rights reserved | Terms of Service | Privacy
                </p>


            </div>
        </div> 
      </div>
  
  );
}

export default Footer;