import React from "react";
import "./Footer_one.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">Safer Travel App</h1>

        <h2>Contact</h2>

        <address>
          5534 The Other Street
          <br />
          Nova Scotia, Canada
          <br />
          <a class="footer__btn" href="mailto:example@safer-travel.com">
            Email Us
          </a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Stay connected</h2>

          <ul class="nav__ul">
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

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Explore</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#">Attractions</a>
            </li>

            <li>
              <a href="#">Flights</a>
            </li>

            <li>
              <a href="#">Statistics</a>
            </li>

            <li>
              <a href="#">Map</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>
          &copy; {new Date().getFullYear()} Safer Travel App Inc. All rights
          reserved.
        </p>

        <div class="legal__links">
          <span>
            Made with <span class="heart">♥</span> remotely from around the
            world
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
