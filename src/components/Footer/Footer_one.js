import React from "react";
import "./Footer_one.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__addr">

        <h2 className="about__us" onClick={props.showAboutUs}>About Us</h2>

        <h2>Contact</h2>

    



        <address>
          5534 The Other Street
          <br />
          West Upper Road, London
          <br />
          <button className="footer__btn" href="mailto:example@safer-travel.com">
            Email Us
          </button>
        </address>
      </div>
      <div className='footer-link-div'>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Stay connected</h2>

          <ul className="nav__ul">
            <li>
              <a className='footer-social' href="https://19grams.coffee/en/coffee/berlinkaffee/organic-fairtrade">
                <FontAwesomeIcon icon={faCoffee} size="2x" />
              </a>
            </li>

            <li>
              <a className='footer-social' href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>

            <li>
              <a className='footer-social' href="https://youtube.com">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>

            <li>
              <a className='footer-social' href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
          </ul>
        </li>
        
        <li className="footer-links1 nav__item nav__item--extra">
          <h2 className="nav__title">Explore</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a className='footer-links' href="/#">Attractions</a>
            </li>

            <li>
              <a className='footer-links' href="/#">Flights</a>
            </li>

            <li>
              <a className='footer-links' href="/#">Statistics</a>
            </li>

            <li>
              <a className='footer-links' href="/#">Map</a>
            </li>
          </ul>
        </li>
    
        <li className="footer-links2 nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="/#">Privacy Policy</a>
            </li>

            <li>
              <a href="/#">Terms of Use</a>
            </li>

            <li>
              <a href="/#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
      </div>
      <div className="legal">
        <p>
          &copy; {new Date().getFullYear()} Safer Travel App Inc. All rights
          reserved.
        </p>

        <div className="legal__links">
        
        </div>
      </div>

    </footer>
  );
};

export default Footer;
