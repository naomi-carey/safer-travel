import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Socialmedia () {
  return (
    <div className='social-container'>
      <h3 className='social-title'>STAY CONNECTED</h3>
      <a
      href='https://19grams.coffee/en/coffee/berlinkaffee/organic-fairtrade'
      className='coffee.social'
      >
      <FontAwesomeIcon icon={faCoffee} size='2x'/>
      </a>
      
      <a
      href='https://twitter.com'
      className='twitter.social'
      >
      <FontAwesomeIcon icon={faTwitter} size='2x'/>
      </a>

      <a
      href='https://facebook.com'
      className='facebook.social'
      >
      <FontAwesomeIcon icon={faFacebook} size='2x'/>
      </a>

      <a
      href='https://youtube.com'
      className='youtube.social'
      >
      <FontAwesomeIcon icon={faYoutube} size='2x'/>
      </a>

    </div>
  )
}