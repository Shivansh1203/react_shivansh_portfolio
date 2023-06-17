import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Shivansh Rastogi
        </p>
        <p className='footer-subscription-text'>
        Always try to explore yourself to reach new horizons
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
        <p>
              
         </p>
        shivansh.rastogi2002@gmail.com
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Portfolio
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Shivansh © 2023</small>
          <div className='social-icons'>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/channel/UC-Et3-fagHHWUSA2-3jG5eQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/Shivansh_120310'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/shivansh-rastogi-04bb27225/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
        </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
