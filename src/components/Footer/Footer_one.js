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
        <div className="About-us-section">
          <h2 className="about__us" onClick={props.showAboutUs}>
            About Us
          </h2>

          <h2>Contact</h2>

          <address>
            5534 The Other Street
            <br />
            West Upper Road, London
            <br />
            <button
              className="footer__btn"
              href="mailto:example@safer-travel.com"
            >
              Email Us
            </button>
          </address>
        </div>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Stay connected</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://19grams.coffee/en/coffee/berlinkaffee/organic-fairtrade">
                <FontAwesomeIcon icon={faCoffee} size="2x" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>

            <li>
              <a href="https://youtube.com">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>

            <li>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Explore</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a className="hide-explore" href="/#">
                Attractions
              </a>
            </li>

            <li>
              <a className="hide-explore" href="/#">
                Flights
              </a>
            </li>

            <li>
              <a className="hide-explore" href="/#">
                Statistics
              </a>
            </li>

            <li>
              <a className="hide-explore" href="/#">
                Map
              </a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
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

      <div className="legal">
        <p>
          &copy; {new Date().getFullYear()} Safer Travel App Inc. All rights
          reserved.
        </p>

        <div className="legal__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
